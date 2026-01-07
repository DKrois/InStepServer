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
import { join } from 'node:path';
import { getURL } from '../app/qr.js';
import { enableIMDAPI, store } from '../app/settings.js';
import { Routes, SitesPaths, userDataPath } from '../constants.js';
import { error as _error, info as _info, warn as _warn } from '../log.js';
import * as api from './api.js';
import { isDBInitialized, projectDB } from './database.js';
import { createDocsRouter } from './docs.js';
import { startMDNSAdvertisement, stopMDNSAdvertisement } from './mdns.js';
import { isAuth, isIMDAPIEnabled, manageImdLock, sendFileIfBrowser } from './middleware.js';

const logSource = 'server';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);
const error = (str: string, err: unknown) => _error(str, err, logSource);

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
export async function initServer(port: number) {
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
        info(`Server listening on ${getURL('ip')}`)
    );

    await startMDNSAdvertisement(port);
    httpTerminator = createHttpTerminator({ server: httpServer });

    return true;
}

export async function stopServer() {
    if (!httpServer) {
        warn('Server not running.');
        return;
    }

    await httpTerminator?.terminate();
    await stopMDNSAdvertisement();

    info('Server closed.');
    httpServer = null;
    httpTerminator = null;
}

export function isServerRunning() {
    return !!httpServer;
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
            maxAge: store.get('sessionMaxAge') || undefined, // sessions don't expire if sessionMaxAge is 0 (per default 30d)
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
    app.set('views', SitesPaths.docs.views);

    app.use(Routes.assets, express.static(SitesPaths.assets));
    app.use(Routes.staticAPI, express.static(projectDB.path)); // serve db path for image access

    app.use(Routes.docsAssets, express.static(SitesPaths.docs.assets));

    app.use(Routes.docs, createDocsRouter({ sidebarType: 'full', basePath: Routes.docs }));
    app.use(Routes.userDocs, createDocsRouter({ sidebarType: 'user', basePath: Routes.userDocs })); // only show the 'User App' section

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