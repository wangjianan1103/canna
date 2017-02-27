/**
 * Created by wangjianan on 17-1-3.
 */
const webpack = require('webpack');
const helpers = require('./helpers');

/*
 * Webpack Plugins
 */
const AssetsPlugin = require('assets-webpack-plugin');
const NormalModuleReplacementPlugin = require('webpack/lib/NormalModuleReplacementPlugin');
const ContextReplacementPlugin = require('webpack/lib/ContextReplacementPlugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const LoaderOptionsPlugin = require('webpack/lib/LoaderOptionsPlugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

/*
 * Webpack Constants
 */
const HMR = helpers.hasProcessFlag('hot');
const AOT = helpers.hasNpmFlag('aot');
const METADATA = {
    title: 'rings',
    baseUrl: '/',
    isDevServer: helpers.isWebpackDevServer()
};

module.exports = function (options) {
    return {
        entry: {
            'polyfills': './src/polyfills.ts',
            'vendor':      './src/vendor.ts',
            'main':      './src/app/main.ts'
        },
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    use: [
                        '@angularclass/hmr-loader?pretty=false&prod=true',
                        'awesome-typescript-loader?{configFileName: "tsconfig.webpack.json"}',
                        'angular2-template-loader',
                        'angular-router-loader?loader=system&genDir=compiled/src/app&aot=' + AOT
                    ]
                },
                {
                    test: /\.json$/,
                    use: 'json-loader'
                },
                {
                    test: /\.css$/,
                    use: ['to-string-loader', 'css-loader']
                },
                {
                    test: /\.html$/,
                    use: 'raw-loader',
                    exclude: [helpers.root('src/index.html')]
                },
                {
                    test: /\.(jpg|png|gif)$/,
                    use: 'file-loader'
                }
            ]
        },
        externals: {
            jquery: "jQuery",
            pageResponse: 'pageResponse'
        },
        resolve: {
            extensions: ['.ts', '.js', '.json'],

            // An array of directory names to be resolved to the current directory
            modules: [helpers.root('src'), helpers.root('node_modules')]
        }
    };
};