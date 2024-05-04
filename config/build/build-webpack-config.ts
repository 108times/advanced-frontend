import { Configuration } from "webpack";
import { BuildOptions } from "./types/config";
import { buildLoaders } from "./build-loaders";
import { buildResolvers } from "./build-resolvers";
import { buildPlugins } from "./build-plugins";
import { buildWebServer } from "./build-web-server";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;

  return {
    mode,

    entry: paths.entry,

    module: {
      rules: buildLoaders(options),
    },

    resolve: buildResolvers(),

    output: {
      filename: "bundle.js",
      path: paths.build,
      clean: true,
    },

    plugins: buildPlugins(options),

    devtool: isDev ? "inline-source-map" : undefined,

    devServer: isDev ? buildWebServer(options) : undefined,
  };
};
