import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import MakerSquirrel from '@electron-forge/maker-squirrel';
import { MakerWix } from '@electron-forge/maker-wix';
import { MakerZIP } from '@electron-forge/maker-zip';
import { AutoUnpackNativesPlugin } from '@electron-forge/plugin-auto-unpack-natives';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';
import type { ForgeConfig } from '@electron-forge/shared-types';
import { FuseV1Options, FuseVersion } from '@electron/fuses';
import { readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
// @ts-expect-error import works
import { exeBaseName, name } from './config.json';
import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const appBaseDir = './src/renderer';

const assetsPath = `sites/assets`;
const windowsIcon = `${assetsPath}/icon.ico`;
const linuxIcon = `${assetsPath}/icon.png`;

const serverAssets = ['sites'];
const installerAssets = resolve(`./src/main/app/wxs`);

const setupExeName = `${exeBaseName}-Setup-$\{version}`;

const config: ForgeConfig = {
    packagerConfig: {
        executableName: exeBaseName,
        icon: windowsIcon,
        asar: true,
        extraResource: [
            windowsIcon,
            linuxIcon,
            ...serverAssets,
        ]
    },
    rebuildConfig: {},
    makers: [
        new MakerSquirrel({
            setupExe: `${setupExeName}.exe`,
            setupIcon: windowsIcon,
            iconUrl: 'https://raw.githubusercontent.com/DKrois/InStepServer/refs/heads/master/sites/assets/icon.ico',
            exe: `${exeBaseName}.exe`
        }),
        new MakerWix({
            name,
            exe: exeBaseName,
            icon: windowsIcon,
            ui: {
                chooseDirectory: true,
                images: {
                    background: join(installerAssets, 'background.png'),
                    banner: join(installerAssets, 'banner.png'),
                },
            },
            features: {
                autoLaunch: true,
                autoUpdate: true,
            },
            beforeCreate: msiCreator => {
                msiCreator.wixTemplate = getTemplate('wixTemplate');
                msiCreator.autoLaunchTemplate = getTemplate('auto-launch-feature', true);
                msiCreator.updaterTemplate = getTemplate('updater-feature', true);
            },
            autoRun: true,
        }),
        new MakerZIP({}, ['darwin']),
        new MakerRpm({
            options: {
                name,
                icon: linuxIcon,
                bin: exeBaseName,
            }
        }),
        new MakerDeb({
            options: {
                name,
                icon: linuxIcon,
                bin: exeBaseName,
            }
        }),
    ],
    plugins: [
        new AutoUnpackNativesPlugin({}),
        new WebpackPlugin({
            mainConfig,
            renderer: {
                config: rendererConfig,
                entryPoints: [
                    {
                        html: `${appBaseDir}/index.html`,
                        js: `${appBaseDir}/js/renderer.ts`,
                        name: 'main_window',
                        preload: {
                            js: `${appBaseDir}/js/preload.ts`,
                        },
                    },
                ],
            },
        }),
        // Fuses are used to enable/disable various Electron functionality at package time, before code signing the application
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false, // enable if child_process.fork is used
            [FuseV1Options.EnableCookieEncryption]: true, // encrypts cookies on disk
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false, // whether NODE_OPTIONS and NODE_EXTRA_CA_CERTS env vars are respected
            [FuseV1Options.EnableNodeCliInspectArguments]: false, // whether --inspect, --inspect-brk, ... flags are respected
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true, // validate app.asar file on load
            [FuseV1Options.OnlyLoadAppFromAsar]: true, // ensure non-validated code can be run (only search for app.asar)
            [FuseV1Options.LoadBrowserProcessSpecificV8Snapshot]: true, // use different files for main/renderer for V8 snapshots
            [FuseV1Options.GrantFileProtocolExtraPrivileges]: false, // don't give pages loaded via file:// protocol extra privileges
        }),
    ],
};

function getTemplate(name: string, trimTrailingNewLine: boolean = false) {
    const path = join(installerAssets, `${name}.wxs`);
    const content = readFileSync(path, 'utf-8');
    return trimTrailingNewLine ? content.replace(/[\r\n]+$/g, '') : content;
}

export default config;
