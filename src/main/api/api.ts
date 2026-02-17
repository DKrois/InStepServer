import express from 'express';
import { randomInt } from 'node:crypto';
import { verifyPassword } from '../app/settings.js';
import { Routes } from '../constants.js';
import { errorToJSON } from '../errorformatting.js';
import { error as _error, info as _info, warn as _warn } from '../log.js';
import { projectDB } from './database.js';
import { activeUserLock, releaseLock } from './middleware.js';

const logSource = 'api';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);
const error = (str: string, err: unknown) => _error(str, err, logSource);

// --- Auth ---
export async function handleLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const { password } = req.body;
        if (!password) return res.status(400).send(errorToJSON('Password is required.'));

        const isValid = await verifyPassword(password);
        if (isValid) {
            req.session.isAuthenticated = true; // Set the session flag

            req.session.save(err => {
                if (err) {
                    error('Session save error after login', err);
                    return next(err);
                }

                _info('User authenticated successfully and session saved.', 'session');
                return res.status(200).json({ message: 'Login successful.' });
            });
        } else {
            warn('Failed login attempt.');
            return res.status(401).json(errorToJSON('Invalid password.'));
        }
    } catch (e) {
        next(e);
    }
}

export function handleReleaseLock(req: express.Request, res: express.Response) {
    if (req.session && req.session.id === activeUserLock.sessionId) {
        // user owns the lock, so they're allowed to release it
        releaseLock('explicit');
        return res.sendStatus(204);
    } else {
        // if someone else tries to release → deny
        return res.status(403).json({ error: 'You do not hold the current lock.' });
    }
}

// --- API Handlers ---

export async function getRandomProjectID(_req: express.Request, res: express.Response) {
    let id;
    do {
        // generate random number; most likely unique
        id = randomInt(10e9, 10e13);
    } while (await projectDB.exists(id));

    try {
        return res.status(200).json({ id });
    } catch (e: any) {
        if (e.code === 'ENOENT') return res.status(400).send(errorToJSON({ message: 'File / directory not found.', path: e.path }));
        return res.status(500).send(errorToJSON(e));
    }
}

export async function handlePUTRequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = req.params.version ? parseInt(req.params.version) : undefined;

    // keys.length === 0 checks if body is empty
    const data = req.body;
    if (!data || Object.keys(data).length === 0) return res.status(400).send(errorToJSON({
        message: 'No data provided',
        id, version,
    }));

    const v = version ?? ((await projectDB.getLatestVersion(id))?.version ?? 0) + 1;

    const handler = async () => {
        await projectDB.add(id, v, data);
        res.sendStatus(204);
    };
    const onSuccess = () => info(`Added / updated ${id}/v${v}`);

    return handle(handler, onSuccess, res, {
        id,
        requireId: true,
        version: v,
        requireVersion: true,
    });
}

export async function handleFloorplanUpload(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = parseInt(req.params.version);

    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) return res.status(400).send(errorToJSON({
        message: 'No files provided.',
        id, version,
    }));

    const handler = async () => {
        for (const file of files) await projectDB.addImage(id, version, file);

        res.sendStatus(204);
    };
    const onSuccess = () => info(`Added ${files.length} floorplans to ${id}/v${version}`);

    return handle(handler, onSuccess, res, {
        id,
        requireId: true,
        version, // don't require version in case of multiple requests sent at once
        requireVersion: false,
    });
}

export async function handleGETRequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = req.params.version ? parseInt(req.params.version) : undefined;
    const includeFloorplans = Boolean(req.params.floorplans);

    const v = version ?? (await projectDB.getLatestVersion(id))?.version;
    const handler = async () => {
        if (v === undefined) return res.status(500).send(errorToJSON({
            message: 'No versions found for this project',
            id, version: v,
        }));

        const imageFiles = await projectDB.listImages(id, v);

        const { data } = await projectDB.get(id, v);

        if (includeFloorplans) {
            data.floorplanImages = {};
            for (const filename of imageFiles) {
                // The filename is the floor name (e.g., 'floor1.png')
                // Construct the static URL
                data.floorplanImages[filename] = `${Routes.staticAPI}/${id}/v${v}/${filename}`;
            }
        } else {
            data.floorplanImages = null;
        }

        res.status(200).send(data);
    };
    const onSuccess = () => {
        const versionString = projectDB.createVersionString(v) ?? '@latest';

        info(`Requested ${id}/${versionString}`);
    };

    return handle(handler, onSuccess, res, {
        id,
        requireId: true,
        version,
        requireVersion: false,
    });
}

export async function handleListProjectsRequest(_req: express.Request, res: express.Response) {
    const handler = async () => {
        const projects = await projectDB.listProjects();
        res.status(200).send(projects);
    };
    const onSuccess = () => info('Listed all projects');

    return handle(handler, onSuccess, res, {
        requireId: false,
        requireVersion: false,
    });
}

export async function handleListProjectVersionsRequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);

    const handler = async () => {
        const versions = await projectDB.listVersionsForProject(id);
        res.status(200).send({ versions });
    };
    const onSuccess = () => info(`Listed ${id}/`);

    return handle(handler, onSuccess, res, {
        id,
        requireId: true,
        requireVersion: false,
    });
}

export async function handleDELETERequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = req.params.version ? parseInt(req.params.version) : undefined;

    const handler = async () => {
        await projectDB.delete(id, version);
        res.sendStatus(204);
    };
    const onSuccess = () => info(`Deleted ${id}/${projectDB.createVersionString(version) ?? ''}`);

    return handle(handler, onSuccess, res, {
        id,
        requireId: true,
        version,
        requireVersion: false,
    });
}

interface HandleOptions {
    id?: number;
    requireId: boolean;
    version?: number;
    requireVersion: boolean;
}
async function handle(handler: () => Promise<any>, onSuccess: () => any, res: express.Response, options: HandleOptions) {
    const { id, requireId, version, requireVersion } = options;

    const check = (name: string, num: number | undefined, require: boolean | undefined) => {
        if (num !== undefined && isNaN(num)) {
            res.status(400).send(errorToJSON({
                message: `Invalid ${name} provided.`,
                id, version,
            }));
            return false;
        } else if (require && (num === undefined || num === null)) {
            res.status(400).send(errorToJSON({
                message: `No ${name} provided.`,
                id, version,
            }));
            return false;
        }
        return true;
    };

    if (!check('ID', id, requireId)) return;
    if (!check('Version', version, requireVersion)) return;

    try {
        return await handler().then(onSuccess);
    } catch (e: any) {
        if (e.code === 'ENOENT') return res.status(400).send(errorToJSON({
            message: 'File / directory not found.',
            path: e.path,
            id, version,
        }));
        return res.status(e.message.includes('structure not valid') ? 400 : 500).send(errorToJSON(e));
    }
}