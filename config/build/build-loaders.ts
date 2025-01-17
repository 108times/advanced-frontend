import { RuleSetRule } from 'webpack'
import { BuildOptions } from './types/config'
import { getCssLoader } from './loaders/css-loader'
import { SVG_LOADER } from './loaders/svg-loader'

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

  const svgLoader = SVG_LOADER

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/,
    type: 'asset/resource',
  }

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, cssLoader]
}
