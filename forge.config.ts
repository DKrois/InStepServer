import { MakerDeb } from '@electron-forge/maker-deb';
import { MakerRpm } from '@electron-forge/maker-rpm';
import { MakerWix } from '@electron-forge/maker-wix';
import { MakerZIP } from '@electron-forge/maker-zip';
import { AutoUnpackNativesPlugin } from '@electron-forge/plugin-auto-unpack-natives';
import { FusesPlugin } from '@electron-forge/plugin-fuses';
import { WebpackPlugin } from '@electron-forge/plugin-webpack';
import type { ForgeConfig } from '@electron-forge/shared-types';
import { FuseV1Options, FuseVersion } from '@electron/fuses';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { exeBaseName, name } from './config.json';
import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const iconPath = './app/assets/icon.ico';
const exeName = `${exeBaseName}-$\{version}`;

const config: ForgeConfig = {
    packagerConfig: {
        executableName: exeName,
        icon: iconPath,
        asar: true,
        extraResource: [
            './app/assets/icon.ico',
        ]
    },
    rebuildConfig: {},
    makers: [
        /*new MakerSquirrel({
            setupExe: setupExeName,
            setupIcon: icon,
        }),*/
        new MakerWix({
            name: name,
            exe: exeName,
            icon: iconPath,
            /*ui: {
                chooseDirectory: true,
            },
            features: {
                autoLaunch: false,
                autoUpdate: false, // TODO
            }*/
            beforeCreate: async (msiCreator) => {
                msiCreator.wixTemplate = await getTemplate('wixTemplate', false); // https://stackoverflow.com/questions/76722043/how-to-modify-electron-wix-msi-installer
            }
        }),
        new MakerZIP({}, ['darwin']),
        new MakerRpm({
            options: {
                icon: iconPath,
            }
        }),
        new MakerDeb({
            options: {
                icon: iconPath,
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
                        html: './app/index.html',
                        js: './app/js/renderer.ts',
                        name: 'main_window',
                        preload: {
                            js: './app/js/preload.ts',
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

async function getTemplate(name: string, trimTrailingNewLine: boolean) {
    const content = await readFile(join(import.meta.dirname, `app\\installer\\${name}.wxs`), 'utf8');
    return trimTrailingNewLine ? content.replace(/[\r\n]+$/g, '') : content;
}

export default config;
