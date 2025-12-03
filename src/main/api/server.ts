import express from 'express';
import session from 'express-session';
import { createHttpTerminator, HttpTerminator } from 'http-terminator';
import multer from 'multer';
import makeStore from 'nedb-promises-session-store';
import * as http from 'node:http';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import * as api from './api.js';
import { userDataPath } from '../app/app.js';
import { enableIMDAPI, store } from '../app/settings.js';
import { isDBInitialized, projectDB } from './database.js';
import { errorWithMessage, info, warn } from '../logging.js';
import { formatError, getOwnIPs, getResource } from '../util.js';

const assetsRoute = '/assets';
const docsRoute = '/docs';
const userDocsRoute = '/user-docs';
const docsAssetsRoute = `${docsRoute}/assets`;
const publicAPI = '/api';
const staticAPI = `${publicAPI}/static`;
const loginRoute = '/login';
const imdRoute = '/app';
const imdAPI = `${imdRoute}/api`;

const sitesPath = getResource('sites');
const publicPath = join(sitesPath, 'public');
export const assetsPath = join(sitesPath, 'assets');
const loginPath = join(sitesPath, 'login');
const imdPath = join(sitesPath, 'protected');

const docsAssetsPath = join(sitesPath, 'docs-assets');
const docsViewsPath = join(sitesPath, 'docs-views');

const upload = multer({ dest: join(tmpdir(), 'InStepServer', 'uploads') });

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

    httpTerminator = createHttpTerminator({ server: httpServer });

    return true;
}

export async function stopServer() {
    if (!httpServer) {
        info('Server not running.');
        return;
    }

    await httpTerminator?.terminate();
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

    // automatic redirect if already authenticated
    app.use('/', (req, res, next) => {
        if (req.method === 'GET') {
            // authenticated: redirect to app
            if (req.session?.isAuthenticated && (req.path === '/' || req.path === loginRoute))
                return res.redirect(enableIMDAPI ? imdRoute : userDocsRoute);

            // not authenticated and accessing root: redirect to login
            // (don't check for loginRoute here as it'll result in a redirect loop
            if (req.path === '/') return res.redirect(enableIMDAPI ? loginRoute : userDocsRoute);
            else return next();
        } else {
            return next();
        }
    });

    app.set('view engine', 'ejs');
    app.set('views', docsViewsPath);

    app.use(assetsRoute, express.static(assetsPath));
    app.use(staticAPI, express.static(projectDB.path)); // serve db path for image access

    app.use(docsAssetsRoute, express.static(docsAssetsPath));

    app.use(docsRoute, createDocsRouter('full'));
    app.use(userDocsRoute, createDocsRouter('user')); // only show the 'User App' section

    app.use(loginRoute, isIMDAPIEnabled, express.static(loginPath));
    app.post(loginRoute, isIMDAPIEnabled, api.handleLogin);

    // GET routes without auth
    app.get(`${imdAPI}/enabled`, (_req: express.Request, res: express.Response) => res.send({ enabled: enableIMDAPI }));
    app.get(`${publicAPI}/:id/list`, api.handleListRequest);
    app.get(`${publicAPI}/:id`, api.handleGETRequest);
    app.get(`${publicAPI}/:id/:version`, api.handleGETRequest);

    // IMD routes with auth
    app.use(imdRoute, isAuth, express.static(imdPath));
    app.put(`${imdAPI}/:id`, isAuth, api.handlePUTRequest);
    app.put(`${imdAPI}/:id/:version`, isAuth, api.handlePUTRequest);
    app.post(`${imdAPI}/:id/:version/floorplans`, isAuth, upload.array('floorplans'), api.handleFloorplanUpload);
    app.delete(`${imdAPI}/:id`, isAuth, api.handleDELETERequest);
    app.delete(`${imdAPI}/:id/:version`, isAuth, api.handleDELETERequest);

    // handle non-existing routes
    app.use((req: express.Request, res: express.Response) => {
        if (isBrowser(req)) {
            res.status(404).sendFile(`${publicPath}/404.html`);
        } else {
            res.status(404).send({
                error: 'Not Found',
                path: req.originalUrl,
            });
        }
    });

    // unhandled error
    app.use((err: any, _req: express.Request, res: express.Response) => {
        errorWithMessage('Unhandled http error', err);
        if (!res.headersSent) {
            res.status(err.status || 500).send({
                error: err.message || 'Internal Server Error',
            });
        }
    });

    return app;
}

function createDocsRouter(sidebarType: 'full' | 'user') {
    const router = express.Router();

    // Middleware to set sidebar type and current path for all routes in this router
    router.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        res.locals.sidebarType = sidebarType;
        // Construct a base path for highlighting active links, e.g., /docs or /user-docs
        res.locals.basePath = req.baseUrl;
        next();
    });

    // main index page
    router.get('/', (req, res) => {
        res.render('pages/docs-index', {
            title: 'Introduction',
            currentPath: `${req.baseUrl}/`
        });
    });

    // Route for nested pages like /imd/overview
    router.get('/:section/:page', (req, res) => {
        const { section, page } = req.params;
        const viewPath = `pages/${section}/${page}`;
        const pageTitle = `${section.toUpperCase()} - ${page.charAt(0).toUpperCase() + page.slice(1)}`;

        // We'd normally check if the file exists, but for this concept we'll render directly
        res.render(viewPath, {
            title: pageTitle,
            currentPath: `${req.baseUrl}/${section}/${page}`
        });
    });

    return router;
}

function isIMDAPIEnabled(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (enableIMDAPI) {
        return next();
    }

    if (isBrowser(req)) {
        return res.status(404).sendFile(`${publicPath}/apiDisabled.html`);
    } else {
        return res.status(503).json({ error: 'IMD API is disabled by the server administrator.' });
    }
}

function isAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
    // show apiDisabled page if IMD disabled
    if (!enableIMDAPI) return isIMDAPIEnabled(req, res, next);

    try {
        if (req.session.isAuthenticated) {
            return next();
        }

        // not authenticated
        res.status(401);
        if (isBrowser(req)) {
            if (req.path === '/' || req.path === imdRoute) return res.redirect(loginRoute);
            else return next();
        } else {
            return res.send(formatError('Unauthorized. Please log in.'));
        }
    } catch (e) {
        next(e);
    }
}

function isBrowser(req: express.Request) {
    const userAgent = req.headers['user-agent']?.toLowerCase() || '';
    return userAgent && !userAgent.includes('PostmanRuntime') && !userAgent.includes('Node');
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