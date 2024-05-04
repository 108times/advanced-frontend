import HtmlWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";
import { ProgressPlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const buildPlugins = ({ paths }: BuildOptions) => {
  return [
    new ProgressPlugin(),

    new HtmlWebpackPlugin({
      template: paths.html,
    }),

    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
};
