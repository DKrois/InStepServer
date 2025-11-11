import express from 'express';
import session from 'express-session';
import { createHttpTerminator, HttpTerminator } from 'http-terminator';
import multer from 'multer';
import makeStore from 'nedb-promises-session-store';
import { Server } from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import * as api from './api';
import { userDataPath } from './app/app';
import { store } from './app/settings';
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
let httpTerminator: HttpTerminator | null = null;
export function initServer(port: number) {
    if (server) {
        warn('Server already running.');
        return false;
    }

    if (!isDBInitialized()) {
        warn("Project db isn't initialized");
        return false;
    }

    const app = createExpressApp();
    server = app.listen(port, '0.0.0.0', () => {
        info(`Server listening on http://${getOwnIPs().pick}:${port}`);
    });

    httpTerminator = createHttpTerminator({ server });

    return true;
}

export async function stopServer() {
    if (!server) {
        info('Server not running.');
        return;
    }

    await httpTerminator?.terminate();
    info('Server closed.');
    server = null;
    httpTerminator = null;
}

function createExpressApp() {
    const app = express();
    app.use(express.json());

    const fileStore = makeStore({
        connect: session,
        filename: join(userDataPath, 'sessions.db'),
    });

    app.use(session({
        secret: api.getSessionSecret(), // Used to sign the session ID cookie
        store: fileStore,
        resave: false,                                    // Don't save session if unmodified
        saveUninitialized: false,                         // Don't create session until something stored
        cookie: {
            secure: false, // true if using HTTPS
            httpOnly: true,
            maxAge: store.get('sessionMaxAge') || undefined, // sessions don't expire if sessionMaxAge is 0
        }
    }));

    app.use('/', (req, res, next) => {
        if (req.path === '/' && req.method === 'GET' && req.session?.isAuthenticated) return res.redirect('/app');

        next();
    });

    app.use(express.static('public')); // for login page
    app.post('/login', api.handleLogin);

    app.use('/api/static', express.static(projectDB.path)); // serve db path for image access
    app.use('/app', isAuth, express.static('protected')); // for IMD

    // GET routes without auth
    app.get('/api/:id/list', api.handleListRequest);
    app.get('/api/:id', api.handleGETRequest);
    app.get('/api/:id/:version', api.handleGETRequest);

    app.put('/api/:id/', isAuth, api.handlePUTRequest);
    app.put('/api/:id/:version', isAuth, api.handlePUTRequest);
    app.post('/api/:id/:version/floorplans', isAuth, upload.array('floorplans'), api.handleFloorplanUpload);
    app.delete('/api/:id', isAuth, api.handleDELETERequest);
    app.delete('/api/:id/:version', isAuth, api.handleDELETERequest);

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

    return app;
}

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