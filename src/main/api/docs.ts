import express from 'express';
import fm from 'front-matter';
import { existsSync, readFileSync } from 'fs';
import { marked } from 'marked';
import { join } from 'path';
import { Routes, SitesPaths } from '../constants.js';
import { error as _error } from '../log.js';
import { formatCase } from '../../common/util.js';

const logSource = 'docs';
const error = (message: string, err: unknown) => _error(message, err, logSource);

const preloadPath = join(SitesPaths.docs.assets, 'js', 'preload.js');
const sidebarConfigPath = join(SitesPaths.docs.config, 'sidebar.json');

type Attributes = { title: string };

interface DocConfig {
    sidebarType: 'full' | 'user';
    basePath: string; // /docs or /user-docs
}

interface SidebarItem {
    title: string;
    key?: string; // for i18n
    href?: string;
    children?: SidebarItem[];
    allowUserDocs?: boolean; // Filter for User Docs
}

export function createDocsRouter(config: DocConfig) {
    const router = express.Router();
    const { sidebarType, basePath } = config;

    const preload = readFileSync(preloadPath, 'utf8');

    // middleware: locals (ejs variables) setup
    router.use((_req, res, next) => {
        res.locals.baseRoute = basePath;
        res.locals.assetsRoute = `${Routes.docs}/assets`; // assets served from /docs/assets
        res.locals.sidebarType = sidebarType;
        res.locals.preload = preload;
        next();
    });

    // root redirect: /docs -> /docs/en/introduction
    router.get('/', (_req, res) =>
        res.redirect(`${basePath}/en/introduction`)
    );

    // language redirect: /docs/en -> /docs/en/introduction
    router.get('/:lang', (req, res) =>
        res.redirect(`${req.baseUrl}/${req.params.lang}/introduction`)
    );

    // main page handler
    router.get('/:lang/*path', async (req, res) => {
        const lang = req.params.lang;
        // @ts-expect-error works fine
        const pathParam = req.params.path.join('/').replaceAll('.md', '') || 'introduction'; // e.g. "server/overview"

        // validate language
        if (!['en', 'de'].includes(lang)) {
            return render404(res, lang, req.path, basePath, getSidebar(sidebarType, 'en'));
        }

        const mdPath = join(SitesPaths.docs.content, lang, `${pathParam}.md`);

        // Check if file exists
        if (!existsSync(mdPath)) {
            return render404(res, lang, req.path, basePath, getSidebar(sidebarType, 'en'));
        }

        try {
            const fileContent = readFileSync(mdPath, 'utf-8');
            const { attributes, body } = fm<Attributes>(fileContent);
            const htmlContent = marked.parse(body, { async: false });

            // construct Title: Section - Page
            const pathParts = pathParam.split('/');
            const pageName = pathParts.pop() || '';
            const sectionName = pathParts.pop() || '';

            // prefer Frontmatter title, else fallback to filename
            const displayTitle = attributes.title || `${sectionName ? formatCase(sectionName) + ' – ' : ''}${formatCase(pageName)}`;

            res.render('layout', {
                title: displayTitle,
                content: htmlContent,
                sidebar: getSidebar(sidebarType, lang),
                currentPath: pathParam,
                lang,
                isFullDocs: sidebarType === 'full',
                showToc: true,
            });

        } catch (err) {
            error('Docs Render Error', err);
            res.status(500).send('Internal Server Error');
        }
    });

    return router;
}

function render404(res: express.Response, lang: string, currentPath: string, basePath: string, sidebar: any[]) {
    const notFoundHtml = `
            <h1>404 Not Found</h1>
            <p>The requested documentation page could not be found.</p>
            <br>
            <a href="${basePath}/${lang}/introduction" style="color: var(--accent-primary); text-decoration: underline;">
                Return to Introduction
            </a>
        `;

    res.status(404).render('layout', {
        title: 'Page Not Found',
        sidebar,
        currentPath,
        lang,
        showToc: false,       // disable right sidebar
        content: notFoundHtml
    });
}

function getSidebar(sidebarType: string, lang: string): any[] {
    const localeData = JSON.parse(readFileSync(join(SitesPaths.docs.locales, `${lang}.json`), 'utf-8'));
    const sidebarConfig = JSON.parse(readFileSync(sidebarConfigPath, 'utf-8'));

    // Recursive function to filter and translate
    const processItems = (items: SidebarItem[]): any[] => {
        return items.reduce((acc: any[], item) => {
            if (sidebarType === 'user' && item.allowUserDocs === false) return acc;

            const translatedTitle = item.key ? (localeData.sidebar[item.key] || item.title) : item.title;
            const processedItem: any = { ...item, title: translatedTitle };

            if (item.children) {
                processedItem.children = processItems(item.children);
            }

            acc.push(processedItem);
            return acc;
        }, []);
    };

    return processItems(sidebarConfig);
}