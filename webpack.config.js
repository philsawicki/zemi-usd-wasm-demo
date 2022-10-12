'use strict';

const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash].js',
        environment: { 
            dynamicImport: true, 
            module: true,
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            inject: 'head',
            scriptLoading: 'blocking',
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src',
                    to: './', // Resolves to: `${output.path}`
                    globOptions: {
                        ignore: [
                            '**/index.html',
                        ],
                    },
                },
            ],
        }),
    ],
    resolve: {
        fallback: {
            'crypto': false,
            'fs': false,
            'path': false,
            'perf_hooks': false,
        },
    },
    externalsPresets: {
        web: false,
        webAsync: true,
    },
};
