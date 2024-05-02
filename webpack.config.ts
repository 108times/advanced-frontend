import path from "path";
import { buildWebpackConfig } from "./config/build/build-webpack-config";
import { BuildOptions } from "./config/build/types/config";

const mode = "development";
const isDev = mode === "development";

const options: BuildOptions = {
  mode,
  isDev,
  paths: {
    entry: path.resolve(__dirname, "src", "index.ts"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
  },
};

const config = buildWebpackConfig(options);

export default config;
