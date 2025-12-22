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

function getLocaleData(lang: string) {
    try {
        return JSON.parse(readFileSync(join(SitesPaths.docs.locales, `${lang}.json`), 'utf-8'));
    } catch (e) {
        // default to en
        if (lang !== 'en') return getLocaleData('en');
        else throw e;
    }
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
            return render404(res, {
                lang: 'en',
                currentPath: pathParam,
                basePath,
                sidebarType,
            });
        }

        const mdPath = join(SitesPaths.docs.content, lang, `${pathParam}.md`);

        // Check if file exists
        if (!existsSync(mdPath)) {
            return render404(res, {
                lang,
                currentPath: pathParam,
                basePath,
                sidebarType,
            });
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

function render404(res: express.Response, options: { lang: string, currentPath: string, basePath: string, sidebarType: string }) {
    const { lang, currentPath, basePath, sidebarType } = options;
    // try to load translations from file
    const data = getLocaleData(lang);
    const t = data.ui['404'];

    // use translated 404
    const notFoundHtml = `
            <div style="text-align: center; padding-top: 2rem;">
                <h1 style="border:none; margin-bottom: 1rem;">${t.heading}</h1>
                <p>${t.message}</p>
                <br>
                <a href="${basePath}/${lang}/introduction" class="nav-link" style="
                    display: inline-block; 
                    background: var(--accent-hover); 
                    color: var(--accent-primary); 
                    padding: 0.5rem 1rem; 
                    border-radius: 4px;
                    text-decoration: none;
                    font-weight: 500;">
                    ${t.button}
                </a>
            </div>
        `;

    res.status(404).render('layout', {
        title: t.title,
        sidebar: getSidebar(sidebarType, lang),
        currentPath,
        lang,
        showToc: false,       // disable right sidebar
        content: notFoundHtml
    });
}

function getSidebar(sidebarType: string, lang: string): any[] {
    const localeData = getLocaleData(lang);
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