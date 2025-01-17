import { Configuration, RuleSetRule } from 'webpack'
import { getCssLoader } from '../build/loaders/css-loader'
import path from 'path'
import { SVG_LOADER } from '../build/loaders/svg-loader'

export default ({ config }: { config: Configuration }) => {
  const srcPath = path.resolve(__dirname, '..', '..', 'src')

  config.resolve.modules.push(srcPath)

  config.module.rules.push(getCssLoader(true))

  config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string))
      return {
        ...rule,
        exclude: /\.svg$/,
      }

    return rule
  })

  config.module.rules.push(SVG_LOADER)

  return config
}
