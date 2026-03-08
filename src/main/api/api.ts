import express from 'express';
import { randomInt } from 'node:crypto';
import { errorToJSON } from '../errorformatting.js';
import { projectDB, type SimplifiedProject } from './database.js';

const logSource = 'api';
const info = (str: string) => _info(str, logSource);

export async function getRandomProjectID(_req: express.Request, res: express.Response) {
    let id;
    do {
        // generate random number; most likely unique
        id = randomInt(10e4, 10e7);
    } while (await projectDB.exists(id));

    try {
        return res.status(200).json({ id });
    } catch (e: any) {
        if (e.code === 'ENOENT') return res.status(400).json(errorToJSON({ message: 'File / directory not found.', path: e.path }));
        return res.status(500).json(errorToJSON(e));
    }
}

export async function handlePUTRequest(req: express.Request, res: express.Response) {
    const id = parseParam(req.params.id);
    const version = req.params.version ? parseParam(req.params.version) : undefined;

    const data: { project: SimplifiedProject } = req.body;
    // keys.length === 0 checks if body is empty
    if (!data || Object.keys(data).length === 0) return res.status(400).json(errorToJSON({
        message: 'No data provided',
        id, version,
    }));
    if (!data.project) return res.status(400).json(errorToJSON({
        message: 'Project not found',
        id, version
    }));

    const v = version ?? ((await projectDB.getLatestVersion(id))?.version ?? 0) + 1;

    const handler = async () => {
        await projectDB.add(id, v, data.project);
        res.status(200).json({ version: v });
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
    const id = parseParam(req.params.id);
    const version = parseParam(req.params.version);

    const files = req.files as Express.Multer.File[];
    if (!files || files.length === 0) return res.status(400).json(errorToJSON({
        message: 'No files provided.',
        id, version,
    }));

    const handler = async () => {
        await Promise.allSettled(files.map(f => projectDB.addImage(id, version, f)));
        res.sendStatus(204);
    };
    const onSuccess = () => info(`Added ${files.length} floorplans to ${id}/v${version}`);

    return handle(handler, onSuccess, res, {
        id,
        requireId: true,
        version,
        requireVersion: false,
    });
}

export async function handleGETRequest(req: express.Request, res: express.Response) {
    const id = parseParam(req.params.id);
    const version = req.params.version ? parseParam(req.params.version) : undefined;

    const handler = async () => {
        const { data } = await projectDB.get(id, version);
        res.status(200).json(data);
    };
    const onSuccess = () => {
        const versionString = projectDB.createVersionString(version) ?? '@latest';
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
        res.status(200).json(projects);
    };
    const onSuccess = () => info('Listed all projects');

    return handle(handler, onSuccess, res, {
        requireId: false,
        requireVersion: false,
    });
}

export async function handleListProjectVersionsRequest(req: express.Request, res: express.Response) {
    const id = parseParam(req.params.id);

    const handler = async () => {
        const versions = await projectDB.listVersionsForProject(id);
        res.status(200).json({ versions });
    };
    const onSuccess = () => info(`Listed ${id}/`);

    return handle(handler, onSuccess, res, {
        id,
        requireId: true,
        requireVersion: false,
    });
}

export async function handleDELETERequest(req: express.Request, res: express.Response) {
    const id = parseParam(req.params.id);
    const version = req.params.version ? parseParam(req.params.version) : undefined;

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

function parseParam(p: string | string[]): number {
    // usually it'll only be one param specified, but type of req.param.x is string | string[]
    return parseInt(Array.isArray(p) ? p[0] : p);
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
            res.status(400).json(errorToJSON({
                message: `Invalid ${name} provided.`,
                id, version,
            }));
            return false;
        } else if (require && (num === undefined || num === null)) {
            res.status(400).json(errorToJSON({
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
        if (e.code === 'ENOENT') return res.status(400).json(errorToJSON({
            message: 'File / directory not found.',
            path: e.path,
            id, version,
        }));
        return res.status(e.message.includes('structure not valid') ? 400 : 500).json(errorToJSON(e));
    }
}