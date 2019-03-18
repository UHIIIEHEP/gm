

const path = require('path');
const webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        publicPath: 'dist/'
    },
    devServer:{
        overlay: true
    },
    watch: false,
    plugins:[
        new webpack.ProvidePlugin({
            $: 'jquery'
        }),
        new ExtractTextPlugin('style.css')
    ],
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  use: ['css-loader','sass-loader']
                })
            }
        ]
    }
};
  