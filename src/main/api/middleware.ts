import express from 'express';
import { imdLockDurationSeconds } from '../../../config.json';
import { enableIMDAPI } from '../app/settings.js';
import { Routes, SitesPaths } from '../constants.js';
import { errorToJSON } from '../errorformatting.js';
import { info as _info } from '../log.js';

const logSource = 'session';
const info = (str: string) => _info(str, logSource);

// only allow one imd connection at a time
export let activeUserLock: { sessionId: string | null; timeoutId: NodeJS.Timeout | null } = {
    sessionId: null,
    timeoutId: null,
};
const LOCK_DURATION_MS = 1000 * imdLockDurationSeconds; // safety net; lock will be released upon close

export function manageImdLock(req: express.Request, res: express.Response, next: express.NextFunction) {
    // Ensure a session exists before trying to lock
    if (!req.session || !req.session.id) return res.status(500).json({ error: 'Session not initialized.' });

    const currentSessionId = req.session.id;

    if (activeUserLock.sessionId && activeUserLock.sessionId !== currentSessionId) {
        // Lock is held by someone else.
        return sendFileIfBrowser(req, res, {
            status: 423,
            filepath: `${SitesPaths.public}/imdInUse.html`,
            error: 'The IMD API is currently in use by another user. Please try again later.',
        });
    }

    // no lock → acquire
    if (!activeUserLock.sessionId) {
        info(`Lock acquired by session ID: ${currentSessionId}`);
        activeUserLock.sessionId = currentSessionId;
    }

    if (activeUserLock.timeoutId) clearTimeout(activeUserLock.timeoutId);
    activeUserLock.timeoutId = setTimeout(() => releaseLock('timeout'), LOCK_DURATION_MS);

    return next();
}

export function isIMDAPIEnabled(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (enableIMDAPI) return next();

    sendFileIfBrowser(req, res, {
        status: 503,
        filepath: `${SitesPaths.public}/apiDisabled.html`,
        error: 'IMD API has been disabled by the server administrator.'
    });
}

export function isAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
    try {
        if (req.session.isAuthenticated) return next();

        // not authenticated
        res.status(401);
        if (isBrowser(req)) {
            if (req.path === '/' || req.path === Routes.imd) return res.redirect(Routes.login);
            else return next();
        } else {
            return res.json(errorToJSON('Unauthorized. Please log in.'));
        }
    } catch (e) {
        next(e);
    }
}

// --- Helpers ---
export function sendFileIfBrowser(req: express.Request, res: express.Response, options: { status: number, filepath: string, error: string | object }) {
    const { status, filepath, error } = options;
    const e = typeof error === 'string' ? { error } : error;
    if (isBrowser(req)) {
        return res.status(status).sendFile(filepath);
    } else {
        return res.status(status).json(e);
    }
}

export function isBrowser(req: express.Request) {
    const userAgent = req.headers['user-agent']?.toLowerCase() || '';
    return userAgent && !userAgent.includes('postmanruntime') && !userAgent.includes('node');
}

export function releaseLock(reason: 'timeout' | 'explicit' = 'timeout') {
    if (activeUserLock.sessionId) {
        info(`Lock released (${reason}) for session ID: ${activeUserLock.sessionId}`);
        activeUserLock.sessionId = null;
        if (activeUserLock.timeoutId) {
            clearTimeout(activeUserLock.timeoutId);
            activeUserLock.timeoutId = null;
        }
    }
}