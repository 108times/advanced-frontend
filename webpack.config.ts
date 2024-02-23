import path from "path";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths, EnvironmentVariables } from "./config/build/types/config";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, "src", "index.js"),
  html: path.resolve(__dirname, "public", "index.html"),
  build: path.resolve(__dirname, "build"),
};

export default ({ mode }: EnvironmentVariables) =>
  buildWebpackConfig({
    mode,
    paths,
  });
