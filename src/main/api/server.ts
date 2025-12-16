import { getOwnIPs, getResource } from '../util.js';
import { join } from 'node:path';
// initialize before menu.ts (imported via app → window) uses it
const sitesPath = getResource('sites');
export const SitesPaths = {
    public: join(sitesPath, 'public'),
    assets: join(sitesPath, 'assets'),
    login: join(sitesPath, 'login'),
    imd: join(sitesPath, 'protected'),

    docsAssets: join(sitesPath, 'docs', 'assets'),
    docsViews: join(sitesPath, 'docs', 'views'),
};

// @ts-expect-error import works fine
import ejs from 'ejs';
import express from 'express';
import session from 'express-session';
import { createHttpTerminator, HttpTerminator } from 'http-terminator';
import multer from 'multer';
import makeStore from 'nedb-promises-session-store';
import * as crypto from 'node:crypto';
import { mkdtempSync } from 'node:fs';
import * as http from 'node:http';
import { tmpdir } from 'node:os';
import * as api from './api.js';
import { userDataPath } from '../app/app.js';
import { enableIMDAPI, store } from '../app/settings.js';
import { isDBInitialized, projectDB } from './database.js';
import { info as _info, warn as _warn, error as _error } from '../log.js';
import { startMDNSAdvertisement, stopMDNSAdvertisement } from './mdns';
import { isAuth, isIMDAPIEnabled, manageImdLock, sendFileIfBrowser } from './middleware.js';
import { createDocsRouter } from './docs.js';

const logSource = 'server';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);
const error = (str: string, err: unknown) => _error(str, err, logSource);

export const Routes = {
    assets: '/assets',
    docs: '/docs',
    userDocs: '/user-docs',
    docsAssets: `/docs/assets`,
    publicAPI: '/api',
    staticAPI: '/api/static',
    login: '/app/login',
    imd: '/app',
    imdAPI: '/app/api',
};

const uploadDir = mkdtempSync(join(tmpdir(), 'InStepServer-uploads'));
const upload = multer({ dest: uploadDir });

// add isAuthenticated flag to session
declare module 'express-session' {
    interface SessionData {
        isAuthenticated: boolean;
    }
}

let httpServer: http.Server | null = null;
let httpTerminator: HttpTerminator | null = null;
export function initServer(port: number) {
    if (httpServer) {
        warn('Server already running.');
        return false;
    }

    if (!isDBInitialized()) {
        warn("Project db isn't initialized");
        return false;
    }

    const app = createExpressApp();
    httpServer = http.createServer(app).listen(port, '0.0.0.0', () =>
        info(`Server listening on http://${getOwnIPs().pick}:${port}`)
    );

    startMDNSAdvertisement(port);

    httpTerminator = createHttpTerminator({ server: httpServer });

    return true;
}

export async function stopServer() {
    if (!httpServer) {
        warn('Server not running.');
        return;
    }

    await httpTerminator?.terminate();
    stopMDNSAdvertisement();

    info('Server closed.');
    httpServer = null;
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
        secret: getSessionSecret(), // Used to sign the session ID cookie
        store: fileStore,
        resave: false, // Don't save session if unmodified
        saveUninitialized: false, // Don't create session until something stored
        cookie: {
            secure: 'auto',
            httpOnly: true,
            maxAge: store.get('sessionMaxAge') || undefined, // sessions don't expire if sessionMaxAge is 0
            path: Routes.imd,
        }
    }));

    // automatic redirect if already authenticated
    app.use('/', (req, res, next) => {
        if (req.method === 'GET') {
            // authenticated: redirect to app
            const pathMatches = req.path === '/' || req.path === Routes.login || req.path === Routes.login + '/';
            if (req.session?.isAuthenticated && pathMatches) return res.redirect(Routes.imd);

            // not authenticated and accessing root: redirect to login
            // (don't check for Routes.login here as it'll result in a redirect loop
            if (req.path === '/') return res.redirect(Routes.login);
            else return next();
        } else {
            return next();
        }
    });

    app.engine('ejs', ejs.renderFile);
    app.set('view engine', 'ejs');
    app.set('views', SitesPaths.docsViews);

    app.use(Routes.assets, express.static(SitesPaths.assets));
    app.use(Routes.staticAPI, express.static(projectDB.path)); // serve db path for image access

    app.use(Routes.docsAssets, express.static(SitesPaths.docsAssets));

    app.use(Routes.docs, createDocsRouter('full'));
    app.use(Routes.userDocs, createDocsRouter('user')); // only show the 'User App' section

    app.use(Routes.login, isIMDAPIEnabled, express.static(SitesPaths.login));
    app.post(Routes.login, isIMDAPIEnabled, api.handleLogin);

    // GET routes without auth
    app.get(`${Routes.imdAPI}/random-id`, api.getRandomProjectID);
    app.get(`${Routes.imdAPI}/enabled`, (_req: express.Request, res: express.Response) => res.json({ enabled: enableIMDAPI }));
    app.get(`${Routes.publicAPI}/list`, api.handleListProjectsRequest);
    app.get(`${Routes.publicAPI}/:id/list`, api.handleListProjectVersionsRequest);
    app.get(`${Routes.publicAPI}/:id`, api.handleGETRequest);
    app.get(`${Routes.publicAPI}/:id/:version`, api.handleGETRequest);

    // IMD routes with auth
    app.post(`${Routes.imdAPI}/release-lock`, isIMDAPIEnabled, isAuth, api.handleReleaseLock);

    const authMiddleware = [isIMDAPIEnabled, isAuth, manageImdLock];
    app.use(Routes.imd, ...authMiddleware, express.static(SitesPaths.imd));
    app.put(`${Routes.imdAPI}/:id`, ...authMiddleware, api.handlePUTRequest);
    app.put(`${Routes.imdAPI}/:id/:version`, ...authMiddleware, api.handlePUTRequest);
    app.post(`${Routes.imdAPI}/:id/:version/floorplans`, ...authMiddleware, upload.array('floorplans'), api.handleFloorplanUpload);
    app.delete(`${Routes.imdAPI}/:id`, ...authMiddleware, api.handleDELETERequest);
    app.delete(`${Routes.imdAPI}/:id/:version`, ...authMiddleware, api.handleDELETERequest);

    // handle non-existing routes
    app.use((req: express.Request, res: express.Response) => {
        sendFileIfBrowser(req, res, {
            status: 404,
            filepath: `${SitesPaths.public}/404.html`,
            error: {
                error: 'Not Found',
                path: req.originalUrl,
            }
        });
    });

    // unhandled error
    app.use((err: any, _req: express.Request, res: express.Response) => {
        error('Unhandled http error', err);
        if (!res.headersSent) {
            res.status(err.status || 500).json({
                error: err.message || 'Internal Server Error',
            });
        }
    });

    return app;
}

function getSessionSecret(): string {
    const key = 'sessionSecret';
    let secret = store.get(key);

    // If no secret is found, generate a new one
    if (!secret) {
        _info('No session secret found. Generating a new one.', 'session');
        secret = crypto.randomBytes(64).toString('hex');

        // Save the new secret to the store for future restarts
        store.set(key, secret);
    }

    return secret;
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

            const filesResponse = await fetch(`/app/api/${id}/${version}/floorplans`, {
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