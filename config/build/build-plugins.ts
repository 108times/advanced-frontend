import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import { BuildOptions } from "./types/config";

export const buildPlugins = ({ paths }: BuildOptions) => {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
  ];
};
