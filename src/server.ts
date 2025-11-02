import express from 'express';
import session from 'express-session';
import makeStore from 'nedb-promises-session-store';
import multer from 'multer';
import crypto from 'node:crypto';
import { Server } from 'node:http';
import { tmpdir } from 'node:os'
import { join } from 'node:path';
import { userDataPath } from './app/app';
import { store, verifyPassword } from './app/settings';
import { isDBInitialized, projectDB } from './database.js';
import { errorWithMessage, formatError, getOwnIPs, info, warn } from './util.js';

const upload = multer({ dest: join(tmpdir(), 'InStepServer', 'uploads') });

// add isAuthenticated flag to session
declare module 'express-session' {
    interface SessionData {
        isAuthenticated: boolean;
    }
}

let server: Server | null = null;
export function initServer(port: number) {
    if (server) {
        info('Server already running.');
        return false;
    }

    if (!isDBInitialized()) {
        warn("Project db isn't initialized");
        return false;
    }

    const app = express();
    app.use(express.json());

    const fileStore = makeStore({
        connect: session,
        filename: join(userDataPath, 'sessions.db'),
    });

    app.use(session({
        secret: getSessionSecret(), // Used to sign the session ID cookie
        store: fileStore,
        resave: false,                                    // Don't save session if unmodified
        saveUninitialized: false,                         // Don't create session until something stored
        cookie: { secure: false, httpOnly: true }         // secure: true if using HTTPS
    }));

    app.use('/', (req, res, next) => {
        if (req.path === '/' && req.method === 'GET' && req.session?.isAuthenticated) return res.redirect('/app');

        next();
    });

    app.use(express.static('public')); // for login page
    app.post('/login', handleLogin);

    app.use('/api/static', express.static(projectDB.path)); // serve db path for image access
    app.use('/app', isAuth, express.static('protected')); // for IMD

    // GET routes without auth
    app.get('/api/:id/list', handleListRequest);
    app.get('/api/:id', handleGETRequest);
    app.get('/api/:id/:version', handleGETRequest);

    app.put('/api/:id/', isAuth, handlePUTRequest);
    app.put('/api/:id/:version', isAuth, handlePUTRequest);
    app.post('/api/:id/:version/floorplans', isAuth, upload.array('floorplans'), handleFloorplanUpload);
    app.delete('/api/:id', isAuth, handleDELETERequest);
    app.delete('/api/:id/:version', isAuth, handleDELETERequest);

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
        if (!res.headersSent) {
            res.status(err.status || 500).send({
                error: err.message || 'Internal Server Error',
            });
        }
    });

    server = app.listen(port, '0.0.0.0', () => {
        info(`Server listening on http://${getOwnIPs().pick}:${port}`);
    });

    return true;
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

// --- Authentication Middleware ---

function isAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        if (req.session.isAuthenticated) {
            return next();
        }
        res.status(401);

        const userAgent = req.headers['user-agent'] || '';
        if (userAgent && !userAgent.includes('PostmanRuntime')) { // PostmanRuntime for API testing
            // likely a browser
            return res.redirect('/');
        } else {
            return res.send(formatError('Unauthorized. Please log in.'));
        }
    } catch (e) {
        next(e);
    }
}

async function handleLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
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

function getSessionSecret(): string {
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

/* EXAMPLE SAVE ON CLIENT -- missing auth (?)
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