import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';

export function buildPlugins(): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src') }),
    new webpack.ProgressPlugin(),
  ];
}
