import webpack from "webpack";

export function buildLoaders(): webpack.RuleSetRule[] {
  const stylesLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\*.tsx?/,
    loader: "ts-loader",
    exclude: /node_modules/,
  };

  return [typescriptLoader, stylesLoader];
}
