import crypto from 'crypto';
import express from 'express';
import { store, verifyPassword } from './app/settings.js';
import { projectDB } from './database.js';
import { errorWithMessage, info, warn } from './logging.js';
import { formatError } from './util.js';

// --- Auth ---

export async function handleLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        const { password } = req.body;
        if (!password) return res.status(400).send(formatError('Password is required.'));

        const isValid = await verifyPassword(password);
        if (isValid) {
            req.session.isAuthenticated = true; // Set the session flag

            req.session.save((err) => {
                if (err) {
                    errorWithMessage('Session save error after login', err);
                    return next(err);
                }

                info('User authenticated successfully and session saved.');
                return res.status(200).json({ message: 'Login successful.' });
            });
        } else {
            warn('Failed login attempt.');
            return res.status(401).json(formatError('Invalid password.'));
        }
    } catch (e) {
        next(e);
    }
}

export function getSessionSecret(): string {
    const key = 'sessionSecret';
    let secret = store.get(key);

    // If no secret is found, generate a new one
    if (!secret) {
        info('No session secret found. Generating a new one.');
        secret = crypto.randomBytes(64).toString('hex');

        // Save the new secret to the store for future restarts
        store.set(key, secret);
    }

    return secret;
}

// --- API Handlers ---

export async function handlePUTRequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = req.params.version ? parseInt(req.params.version) : undefined;

    // keys === 0 checks if body is empty
    const data = req.body;
    if (!data || Object.keys(data).length === 0) return res.status(400).send(formatError('No data provided.'));

    const v = version ?? ((await projectDB.getLatestVersion(id))?.version ?? 0) + 1;

    const handler = async () => {
        await projectDB.add(id, v, data);
        res.sendStatus(204);
    };
    const onSuccess = () => info(`Added / updated ${id}/v${v}`);

    return handle(handler, onSuccess, res, id, v, true);
}

export async function handleFloorplanUpload(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = parseInt(req.params.version);

    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) return res.status(400).send(formatError('No files provided.'));

    const handler = async () => {
        for (const file of files) await projectDB.addImage(id, version, file);

        res.sendStatus(204);
    };
    const onSuccess = () => info(`Added ${files.length} floorplans to ${id}/v${version}`);

    return handle(handler, onSuccess, res, id, version, false); // don't require version in case of multiple requests sent at once
}

export async function handleGETRequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = req.params.version ? parseInt(req.params.version) : undefined;

    const handler = async () => {
        const v = version ?? (await projectDB.getLatestVersion(id))?.version;
        if (v === undefined) return formatError('No versions found for this project.');

        const data = await projectDB.get(id, v);

        const imageFiles = await projectDB.listImages(id, v);

        data.floorplanImages = {};
        for (const filename of imageFiles) {
            // The filename is the floor name (e.g., 'floor1.png')
            // Construct the static URL
            data.floorplanImages[filename] = `/api/static/${id}/v${v}/${filename}`;
        }

        res.status(200).send(data);
    };
    const onSuccess = () => info(`Requested ${id}/${(version ? `v${version}` : '@latest')}`);

    return handle(handler, onSuccess, res, id, version, false);
}

export async function handleListRequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);

    const handler = async () => {
        const versions = await projectDB.list(id);
        res.status(200).send({ versions });
    };
    const onSuccess = () => info(`Listed ${id}/`);

    return handle(handler, onSuccess, res, id);
}

export async function handleDELETERequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = req.params.version ? parseInt(req.params.version) : undefined;

    const handler = async () => {
        await projectDB.delete(id, version);
        res.sendStatus(204);
    };
    const onSuccess = () => info(`Deleted ${id}/${version ? `v${version}` : ''}`);

    return handle(handler, onSuccess, res, id, version, false);
}

async function handle(handler: () => Promise<any>, onSuccess: () => any, res: express.Response, id: number, version?: number, requireVersion?: boolean) {
    res.setHeader('Content-Type', 'application/json');

    if (isNaN(id)) return res.status(400).send(formatError('No / invalid ID provided.'));
    if (version !== undefined && isNaN(version)) return res.status(400).send(formatError('Invalid version provided.'));
    if (requireVersion && (version === undefined || version === null)) return res.status(400).send(formatError('No version provided.'));

    try {
        return await handler().then(onSuccess);
    } catch (e: any) {
        if (e.code === 'ENOENT') return res.status(400).send(formatError('File not found.', { path: e.path }));
        return res.status(500).send(formatError(e))
    }
}