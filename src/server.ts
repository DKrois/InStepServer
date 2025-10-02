import express from 'express';
import { port } from './config.json';
import { projectDB } from './database';
import { errorWithMessage, formatError, getOwnIPs, log } from './util';
import { Server } from 'node:http';

// const { port } = config;

export const stats = {
    resourceAccessed: 0
};
let server: Server | null = null;
export function initServer() {
    if (server) {
        log('Server already running.');
        return;
    }

    const app = express();
    app.use(express.json());

    app.use((req, res, next) => {
        stats.resourceAccessed++;
        next();
    }, express.static('public'));

    app.put('/api/:id/', handlePUTRequest);
    app.put('/api/:id/:version', handlePUTRequest);

    app.get('/api/:id/list', handleListRequest);
    app.get('/api/:id', handleGETRequest);
    app.get('/api/:id/:version', handleGETRequest);

    app.delete('/api/:id', handleDELETERequest);
    app.delete('/api/:id/:version', handleDELETERequest);

    // handle non-existing routes
    app.use((req, res) => {
        res.status(404).send({
            error: 'Not Found',
            path: req.originalUrl,
        });
    });
    
    // unhandled error
    app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
        errorWithMessage('Unhandled http error', err);
        res.status(err.status || 500).json({
            error: err.message || 'Internal Server Error',
        });
    });

    server = app.listen(port, '0.0.0.0', () => {
        log(`Server listening on http://${getOwnIPs().pick}:${port}`);
    });
}

export function stopServer() {
    if (!server) {
        log('Server not running.');
        return;
    }

    server.close(() => {
        log('Server closed.');
        server = null;
    });
}

async function handlePUTRequest(req: express.Request, res: express.Response) {
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
    const onSuccess = () => log(`Added / updated ${id}/v${v}`);

    return handle(handler, onSuccess, res, id, v, true);
}

async function handleGETRequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = req.params.version ? parseInt(req.params.version) : undefined;

    const handler = async () => {
        const data = await projectDB.get(id, version);
        res.status(200).send(data);
    };
    const onSuccess = () => log(`Requested ${id}/${(version ? `v${version}` : '@latest')}`);

    return handle(handler, onSuccess, res, id, version, false);
}

async function handleListRequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);

    const handler = async () => {
        const versions = await projectDB.list(id);
        res.status(200).send({ versions });
    };
    const onSuccess = () => log(`Listed ${id}/`);

    return handle(handler, onSuccess, res, id);
}

async function handleDELETERequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);
    const version = req.params.version ? parseInt(req.params.version) : undefined;

    const handler = async () => {
        await projectDB.delete(id, version);
        res.sendStatus(204);
    };
    const onSuccess = () => log(`Deleted ${id}/${version ? `v${version}` : ''}`);

    return handle(handler, onSuccess, res, id, version, false);
}

async function handle(handler: () => Promise<any>, onSuccess: () => any, res: express.Response, id: number, version?: number, requireVersion?: boolean) {
    res.setHeader('Content-Type', 'application/json');

    if (isNaN(id)) return res.status(400).send(formatError('No / invalid ID provided.'));
    if (version !== undefined && isNaN(version)) return res.status(400).send(formatError('Invalid version provided.'));
    if (requireVersion && !version) return res.status(400).send(formatError('No version provided.'));

    try {
        return await handler().then(onSuccess);
    } catch (e: any) {
        if (e.code === 'ENOENT') return res.status(400).send(formatError('File not found.', { path: e.path }));
        return res.status(500).send(formatError(e))
    }
}