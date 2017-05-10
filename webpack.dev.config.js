const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const data = require('./data.js');

module.exports = {
  entry: [path.join(__dirname, 'src')],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'umd'
  },

  externals: {
    react: 'react',
    'react-dom': 'react-dom',
    'react-dom/server': 'react-dom/server',
    'react-router': 'react-router'
  },

  plugins: [
    new ExtractTextPlugin('style.css'),
    new StaticSiteGeneratorPlugin('main', data.routes, data),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src', 'assets'),
        to: path.resolve(__dirname, 'dist', 'assets')
      },
      {
        from: path.resolve(__dirname, 'src', 'favicon.ico'),
        to: path.resolve(__dirname, 'dist')
      }
    ]),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: { baseDir: ['dist'] },
      notify: false,
      cors: true
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, 'src')],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015']
          }
        }
      },
      {
        test: /style\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /critical\.scss/,
        use: ['to-string-loader', 'css-loader', 'sass-loader']
      }
    ]
  }
};
