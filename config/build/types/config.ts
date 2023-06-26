import { Configuration } from 'webpack';

export type BuildMode = 'development' | 'production';
export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
}
export interface BuildOptions {
  isDev: boolean;
  mode: Configuration['mode'];
  paths: BuildPaths;
}
