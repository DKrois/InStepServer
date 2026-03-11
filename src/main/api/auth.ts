import express from 'express';
import { imdLockDurationSeconds } from '../../../config.json';
import { store } from '../app/settings.js';
import { Routes, SitesPaths } from '../constants.js';
import { errorToJSON } from '../errorformatting.js';
import { error as _error, info as _info, warn as _warn } from '../log.js';
import { verifyPassword } from '../app/security.js';

const logSource = 'auth';
const info = (str: string) => _info(str, logSource);
const warn = (str: string) => _warn(str, logSource);
const error = (str: string, err: unknown) => _error(str, err, logSource);

// only allow one imd connection at a time
export let activeUserLock: { sessionId: string | null; timeoutId: NodeJS.Timeout | null } = {
    sessionId: null,
    timeoutId: null,
};
const LOCK_DURATION_MS = 1000 * imdLockDurationSeconds; // safety net; lock will be released upon close

// In-memory store for tracking login attempts - <ip, data>
const loginAttempts = new Map<string, { count: number; lockoutUntil: number | null }>();

export function handleLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
    const maxAttempts = store.get('maxLoginAttempts', 5);
    const lockoutMinutes = store.get('lockoutDurationMinutes', 10);

    const clientIp = req.ip;
    if (!clientIp) {
        return res.status(500).json({
            error: 'No client ip address'
        });
    }

    const attemptRecord = loginAttempts.get(clientIp) || { count: 0, lockoutUntil: null };

    // check if the user is currently locked out
    if (attemptRecord.lockoutUntil && attemptRecord.lockoutUntil > Date.now()) {
        warn(`Blocked login attempt from locked-out IP: ${clientIp}.`);
        return res.status(429).json({ // 429 Too Many Requests
            error: 'Too many failed attempts.',
            lockoutUntil: attemptRecord.lockoutUntil
        });
    }

    try {
        const { password } = req.body;
        if (!password) return res.status(400).json(errorToJSON('Password is required.'));

        if (verifyPassword(password)) {
            // on successful login, clear any previous attempts for this IP
            loginAttempts.delete(clientIp);

            req.session.isAuthenticated = true;
            req.session.save(err => {
                if (err) {
                    error('Session save error after login', err);
                    return next(err);
                }
                info('User authenticated successfully and session saved.');
                return res.status(200).json({ message: 'Login successful.' });
            });
        } else {
            // on failed login, increment attempts and check for lockout
            attemptRecord.count++;

            warn(`Failed login attempt #${attemptRecord.count} / ${maxAttempts} from ${clientIp}`);

            if (attemptRecord.count >= maxAttempts) {
                const lockoutDurationMs = lockoutMinutes * 60 * 1000;
                attemptRecord.lockoutUntil = Date.now() + lockoutDurationMs;

                warn(`IP ${clientIp} has been locked out for ${lockoutMinutes} minutes.`);

                loginAttempts.set(clientIp, attemptRecord); // save updated record

                return res.status(429).json({
                    error: `Too many failed login attempts. Please try again in ${lockoutMinutes} minutes.`,
                    lockoutUntil: attemptRecord.lockoutUntil
                });
            }

            loginAttempts.set(clientIp, attemptRecord);
            const remainingTries = maxAttempts - attemptRecord.count;
            return res.status(401).json({
                error: 'Invalid password.',
                remainingTries,
            });
        }
    } catch (e) {
        next(e);
    }
}

export function handleReleaseLock(req: express.Request, res: express.Response) {
    if (req.session && req.session.id === activeUserLock.sessionId) {
        // user owns the lock, so they're allowed to release it
        releaseLock('explicit');
        return res.sendStatus(204);
    } else {
        // if someone else tries to release -> deny
        return res.status(403).json({ error: 'You do not hold the current lock.' });
    }
}

export function manageImdLock(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (!req.session || !req.session.id) return res.status(500).json({ error: 'Session not initialized.' });

    const currentSessionId = req.session.id;
    if (activeUserLock.sessionId && activeUserLock.sessionId !== currentSessionId) {
        // lock held by someone else
        return sendFileIfBrowser(req, res, {
            status: 423, // 423 Locked
            filepath: `${SitesPaths.public}/imdInUse.html`,
            error: 'The IMD API is currently in use by another user. Please try again later.',
        });
    }

    // no lock -> acquire
    if (!activeUserLock.sessionId) {
        info(`Lock acquired by session ID: ${currentSessionId}`);
        activeUserLock.sessionId = currentSessionId;
    }

    if (activeUserLock.timeoutId) clearTimeout(activeUserLock.timeoutId);
    activeUserLock.timeoutId = setTimeout(() => releaseLock('timeout'), LOCK_DURATION_MS);

    return next();
}

export function isIMDAPIEnabled(req: express.Request, res: express.Response, next: express.NextFunction) {
    if (store.get('imdEnabled')) return next();

    sendFileIfBrowser(req, res, {
        status: 403, // 403 Forbidden
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
            if (req.path === '/' || req.path === Routes.imd) {
                return res.redirect(Routes.login);
            } else {
                return next();
            }
        } else {
            return res.json(errorToJSON('Unauthorized. Please log in.'));
        }
    } catch (e) {
        next(e);
    }
}

// --- Helpers ---
export function sendFileIfBrowser(req: express.Request, res: express.Response, options: {
    status: number,
    filepath: string,
    error: string | object
}) {
    const { status, filepath, error } = options;
    if (isBrowser(req)) {
        return res.status(status).sendFile(filepath);
    } else {
        const e = typeof error === 'string' ? { error } : error;
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