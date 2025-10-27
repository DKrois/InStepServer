import express from 'express';
import multer from 'multer';
import { Server } from 'node:http';
import { tmpdir } from 'os'
import { join } from 'node:path';
import { projectDB } from './database.js';
import { errorWithMessage, formatError, getOwnIPs, info } from './util.js';

const upload = multer({ dest: join(tmpdir(), 'InStepServer', 'uploads') });

let server: Server | null = null;
export function initServer(port: number) {
    if (server) {
        info('Server already running.');
        return;
    }

    const app = express();
    app.use(express.json());

    app.use(express.static('public'));
    // serve db path for image access
    app.use('/api/static', express.static(projectDB.path));

    app.put('/api/:id/', handlePUTRequest);
    app.put('/api/:id/:version', handlePUTRequest);

    // POST endpoint for uploading floorplan images
    app.post('/api/:id/:version/floorplans', upload.array('floorplans'), handleFloorplanUpload);

    app.get('/api/:id/list', handleListRequest);
    app.get('/api/:id', handleGETRequest);
    app.get('/api/:id/:version', handleGETRequest);

    app.delete('/api/:id', handleDELETERequest);
    app.delete('/api/:id/:version', handleDELETERequest);

    // handle non-existing routes
    app.use((req: express.Request, res: express.Response) => {
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
        info(`Server listening on http://${getOwnIPs().pick}:${port}`);
    });
}

export function stopServer() {
    if (!server) {
        info('Server not running.');
        return;
    }

    server.close(() => {
        info('Server closed.');
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
    const onSuccess = () => info(`Added / updated ${id}/v${v}`);

    return handle(handler, onSuccess, res, id, v, true);
}

async function handleFloorplanUpload(req: express.Request, res: express.Response) {
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

async function handleGETRequest(req: express.Request, res: express.Response) {
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

async function handleListRequest(req: express.Request, res: express.Response) {
    const id = parseInt(req.params.id);

    const handler = async () => {
        const versions = await projectDB.list(id);
        res.status(200).send({ versions });
    };
    const onSuccess = () => info(`Listed ${id}/`);

    return handle(handler, onSuccess, res, id);
}

async function handleDELETERequest(req: express.Request, res: express.Response) {
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

/* EXAMPLE SAVE ON CLIENT
 *
/**
 * Saves the entire project state to the server, including floorplan images.
 * @param id The project ID.
 * @param version The project version.
 * @param projectData The main project JSON object (the 'state.project' object).
 * @param floorplanFiles A record mapping floor name to the actual File object from an input.
 *\/
async function saveProjectToServer(
    id: number,
    version: number,
    projectData: Project,
    floorplanFiles: Record<string, File>
) {
    try {
        // --- Step 1: Send the main project JSON data ---
        console.log('Step 1: Saving project data...');
        const projectResponse = await fetch(`/api/${id}/${version}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            // Send the project data, but floorplanImages can be omitted as the server ignores it
            body: JSON.stringify(projectData),
        });

        if (!projectResponse.ok) {
            const error = await projectResponse.json();
            throw new Error(`Failed to save project data: ${error.message || 'Unknown error'}`);
        }
        console.log('Project data saved successfully.');

        // --- Step 2: Upload the floorplan image files ---
        if (Object.keys(floorplanFiles).length > 0) {
            console.log('Step 2: Uploading floorplan images...');
            const formData = new FormData();

            // Append each file to the form data.
            // The key 'floorplans' must match the server's `upload.array('floorplans')`.
            // The third argument to append() sets the filename, which we use as the floor name.
            for (const [floorName, file] of Object.entries(floorplanFiles)) {
                formData.append('floorplans', file, floorName);
            }

            const filesResponse = await fetch(`/api/${id}/${version}/floorplans`, {
                method: 'POST',
                body: formData, // When using FormData, the browser sets the correct Content-Type header automatically
            });

            if (!filesResponse.ok) {
                const error = await filesResponse.json();
                throw new Error(`Failed to upload floorplan images: ${error.message || 'Unknown error'}`);
            }
            console.log('Floorplan images uploaded successfully.');
        }

        alert('Project saved successfully!');

    } catch (error) {
        console.error('An error occurred during save:', error);
        alert(`Error saving project: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
}

// --- Example of how to collect the files and call the function ---
// This would be in your UI logic where the save button is.
// You need to track which files have been newly selected by the user.

// Assume you have:
// let newFilesToUpload: Record<string, File> = {}; // e.g., { "ground-floor.png": File, "first-floor.pdf": File }
// let currentProjectState: Project = state.project;
// let projectId = 123;
// let projectVersion = 2;
//
// saveProjectToServer(projectId, projectVersion, currentProjectState, newFilesToUpload);
 */