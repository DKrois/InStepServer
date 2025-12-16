import { resolve } from 'node:path';

const assetsFolder = resolve('src/renderer/assets');

import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import CopyWebpackPlugin = require('copy-webpack-plugin');

export const plugins = [
    new ForkTsCheckerWebpackPlugin({
        logger: 'webpack-infrastructure',
        typescript: {
            configFile: 'src/renderer/tsconfig.webpack.json'
        },
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: assetsFolder,
                to: 'main_window/assets', // will be available at http://localhost:3000/assets/
            },
        ],
    }),
];
