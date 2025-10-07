import { join } from 'node:path';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

export const plugins = [
    new ForkTsCheckerWebpackPlugin({
        logger: 'webpack-infrastructure',
        typescript: {
            configFile: 'tsconfig.webpack.json'
        },
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: join(__dirname, 'app', 'assets'),
                to: 'main_window/assets', // will be available at http://localhost:3000/assets/
            },
        ],
    }),
];
