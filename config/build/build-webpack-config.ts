import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";
import { buildPlugins } from "./build-plugins";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths } = options;

  return {
    mode,

    entry: paths.entry,

    module: {
      rules: buildLoaders(),
    },

    resolve: buildResolvers(),

    output: {
      filename: "bundle.js",
      path: paths.build,
      clean: true,
    },

    plugins: buildPlugins(options),
  };
};
