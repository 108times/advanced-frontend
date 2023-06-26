import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import webpack from 'webpack';
import { BuildOptions } from './types/config';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode: mode,

    entry: paths.entry,

    output: {
      path: paths.build,
      filename: 'output.[contenthash].js',
      clean: true,
    },

    module: {
      rules: buildLoaders(),
    },

    resolve: buildResolvers(),

    plugins: buildPlugins(options),
  };
}
