import path from 'path'
import { buildWebpackConfig } from './config/build/build-webpack-config'
import { BuildEnv, BuildOptions } from './config/build/types/config'

export default (env: BuildEnv) => {
  const mode = env.mode ?? 'development'
  const PORT = env.port ?? 3000

  const isDev = mode === 'development'

  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  const options: BuildOptions = {
    mode,
    isDev,
    paths,
    port: PORT,
  }

  const config = buildWebpackConfig(options)

  return config
}
