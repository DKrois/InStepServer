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
import { exeBaseName, name } from './config.json';
import { mainConfig } from './webpack.main.config';
import { rendererConfig } from './webpack.renderer.config';

const iconPath = './app/assets/icon.ico';
const exeName = `${exeBaseName}-$\{version}`;
const setupExeName = `${exeBaseName}-Setup-$\{version}`;

const config: ForgeConfig = {
    packagerConfig: {
        executableName: exeName,
        icon: iconPath,
        asar: true,
        extraResource: [
            iconPath,
        ]
    },
    rebuildConfig: {},
    makers: [
        new MakerSquirrel({
            setupExe: `${setupExeName}.exe`,
            setupIcon: iconPath,
            exe: `${exeName}.exe`,

        }),
        new MakerWix({
            name: name,
            exe: exeName,
            icon: iconPath, // https://stackoverflow.com/questions/19271862/wix-how-to-run-exe-files-after-installation-from-installed-directory, icons, name (Machine)
            ui: {
                chooseDirectory: true,
            },
            features: {
                autoLaunch: false,
                autoUpdate: false, // TODO
            }
        }),
        new MakerZIP({}, ['darwin']),
        new MakerRpm({
            options: {
                name: name,
                icon: iconPath,
            }
        }),
        new MakerDeb({
            options: {
                name: name,
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

export default config;
