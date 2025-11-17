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
import { exeBaseName, name } from './config.json';
import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const appBaseDir = './src/renderer';

const assetsPath = `${appBaseDir}/assets`;
const windowsIcon = `${assetsPath}/icon.ico`;
const linuxIcon = `${assetsPath}/icon.png`;

// /usr/lib/instep-server/resources/icon.ico

const installerAssets = resolve(`./src/main/app/wxs`);

const setupExeName = `${exeBaseName}-Setup-$\{version}`;

const config: ForgeConfig = {
    packagerConfig: {
        executableName: exeBaseName,
        icon: windowsIcon,
        asar: true,
        extraResource: [
            windowsIcon,
            linuxIcon
        ]
    },
    rebuildConfig: {},
    makers: [
        new MakerSquirrel({
            setupExe: `${setupExeName}.exe`,
            setupIcon: windowsIcon,
            iconUrl: 'https://raw.githubusercontent.com/DKrois/InStepServer/refs/heads/master/app/assets/icon.ico',
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
                    banner: join(installerAssets, 'logo.png'),
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
        // Fuses are used to enable/disable various Electron functionality
        // at package time, before code signing the application
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true,
        }),
    ],
};

function getTemplate(name: string, trimTrailingNewLine: boolean = false) {
    const path = join(__dirname, `./src/main/app/wxs/${name}.wxs`);
    const content = readFileSync(path, 'utf-8');
    return trimTrailingNewLine ? content.replace(/[\r\n]+$/g, '') : content;
}

export default config;
