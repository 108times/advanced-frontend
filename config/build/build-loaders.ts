import { RuleSetRule } from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BuildOptions } from './types/config'
import { getCssLoader } from './loaders/css-loader'

export const buildLoaders = ({ isDev }: BuildOptions): RuleSetRule[] => {
  const babelLoader = {
    test: /\.(js|ts|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ru'],
              keyAsDefaultValue: true,
            },
          ],
        ],
      },
    },
  }

  const cssLoader = getCssLoader(isDev)

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  const svgLoader = {
    test: /\.svg$/,
    use: '@svgr/webpack',
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/,
    type: 'asset/resource',
  }

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
