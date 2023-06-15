import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { buildResolvers } from './config/build/buildResolvers';
import { buildPlugins } from './config/build/buildPlugins';
import { buildLoaders } from './config/build/buildLoaders';

export const config: webpack.Configuration = {
  mode: 'development',

  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'output.[contenthash].js',
    clean: true,
  },

  module: {
    rules: buildLoaders(),
  },

  resolve: buildResolvers(),

  plugins: buildPlugins(),
};
