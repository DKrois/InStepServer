import express from 'express';

export function createDocsRouter(sidebarType: 'full' | 'user') {
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