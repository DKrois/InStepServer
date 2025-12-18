import express from 'express';
import { Routes } from '../constants.js';
import { error } from '../log.js';

type SidebarType = 'full' | 'user';

export interface NavItem {
    label: string;
    i18nKey: string;
    id?: string; // Used for folder expansion logic
    href?: string; // Relative to the docs root (e.g., '/server/overview')
    children?: NavItem[];
    allowedContexts: SidebarType[]; // Controls visibility
}

export function createDocsRouter(sidebarType: SidebarType) {
    const router = express.Router();

    // global middleware for router
    router.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        // inject global variables for EJS
        res.locals.sidebarType = sidebarType;
        res.locals.baseRoute = req.baseUrl; // '/docs' or '/user-docs'
        res.locals.docsImages = Routes.docsImages;
        res.locals.docsAssets = Routes.docsAssets;

        // inject nav data (sidebar)
        res.locals.navTree = getFilteredNav(sidebarType);

        next();
    });

    // handles /, /server/overview, /server/security/password, etc.
    router.get(/.*/, (req: express.Request, res: express.Response) => {
        // strip trailing slash for consistency
        let path = req.path.replace(/\/$/, '') || '/';

        // determine title from nav data (optional, purely for <title>)
        const pathSegments = path.split('/').filter(Boolean);
        const title = pathSegments.length > 0
            ? pathSegments.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' – ')
            : 'Introduction';

        // determine EJS View path
        // if path is '/', render 'pages/docs-index'
        // otherwise, render 'pages/path/to/file'
        let viewPath = path === '/'
            ? 'pages/docs-index'
            : `pages${path}`;

        // inject current path relative to docs root for highlighting
        res.locals.currentPath = path;
        res.locals.title = title;
        res.locals.is404 = false;

        // try to render
        res.render(viewPath, (err: Error, html: string) => {
            if (err) {
                // check if it's a "view not found" error
                if (err.message.includes('Failed to lookup view')) {
                    // 404
                    res.locals.is404 = true;
                    res.locals.title = 'Page not found';
                    return res.status(404).render('pages/404');
                }
                // actual server error (syntax error in EJS, etc)
                error('Docs render error', err, 'docs');
                return res.status(500).send('Internal server error');
            }
            // render successful
            res.send(html);
        });
    });

    return router;
}

export const DOCS_NAVIGATION: NavItem[] = [
    {
        label: 'Introduction',
        i18nKey: 'nav.intro',
        href: '/', // The root index page
        allowedContexts: ['full', 'user']
    },
    {
        label: 'Indoor Map Digitalizer',
        i18nKey: 'nav.imd',
        id: 'imd',
        allowedContexts: ['full'],
        children: [
            {
                label: 'Overview',
                i18nKey: 'nav.overview',
                href: '/imd/overview',
                allowedContexts: ['full']
            },
            {
                label: 'Quickstart',
                i18nKey: 'nav.quickstart',
                href: '/imd/quickstart',
                allowedContexts: ['full']
            }
            // Add more pages here
        ]
    },
    {
        label: 'Server',
        i18nKey: 'nav.server',
        id: 'server',
        allowedContexts: ['full'],
        children: [
            {
                label: 'Overview',
                i18nKey: 'nav.overview',
                href: '/server/overview',
                allowedContexts: ['full']
            },
            {
                label: 'Quickstart',
                i18nKey: 'nav.quickstart',
                href: '/server/quickstart',
                allowedContexts: ['full']
            },
            {
                label: 'Security',
                i18nKey: 'nav.server_security',
                id: 'server-security',
                allowedContexts: ['full'],
                children: [
                    {
                        label: 'Session Settings',
                        i18nKey: 'nav.server_session',
                        href: '/server/security/session',
                        allowedContexts: ['full']
                    },
                    {
                        label: 'Password',
                        i18nKey: 'nav.server_password',
                        href: '/server/security/password',
                        allowedContexts: ['full']
                    }
                ]
            }
        ]
    },
    {
        label: 'User App',
        i18nKey: 'nav.app',
        id: 'app',
        allowedContexts: ['full', 'user'],
        children: [
            {
                label: 'Overview',
                i18nKey: 'nav.overview',
                href: '/app/overview',
                allowedContexts: ['full', 'user']
            },
            {
                label: 'Quickstart',
                i18nKey: 'nav.quickstart',
                href: '/app/quickstart',
                allowedContexts: ['full', 'user']
            }
        ]
    }
];

// Helper to filter the tree based on the context (user vs full)
export function getFilteredNav(context: SidebarType): NavItem[] {
    const filterItems = (items: NavItem[]): NavItem[] =>
        items.filter(item => item.allowedContexts.includes(context))
            .map(item => ({
                ...item,
                children: item.children ? filterItems(item.children) : undefined
            }));
    return filterItems(DOCS_NAVIGATION);
}