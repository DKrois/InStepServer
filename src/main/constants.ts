import { app } from 'electron';
import { join } from 'node:path';
import { getResource } from './util';

export const userDataPath = app.getPath('userData');
export const defaultDBPath = join(userDataPath, 'data');

const sitesPath = getResource('sites');
const docsPath = join(sitesPath, 'docs');
export const SitesPaths = {
    public: join(sitesPath, 'public'),
    assets: join(sitesPath, 'assets'),
    login: join(sitesPath, 'login'),
    imd: join(sitesPath, 'protected'),

    docsViews: join(docsPath, 'views'),
    docsContent: join(docsPath, 'content'),
    docsAssets: join(docsPath, 'assets'),
};

const docsAssetsRoute = `/docs/assets`;
export const Routes = {
    assets: '/assets',
    publicAPI: '/api',
    staticAPI: '/api/static',
    login: '/app/login',
    imd: '/app',
    imdAPI: '/app/api',

    docs: '/docs',
    userDocs: '/user-docs',
    docsAssets: docsAssetsRoute,
    docsImages: `${docsAssetsRoute}/images`,
};