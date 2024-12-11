import type { Config } from 'jest'
import path from 'path'

const config: Config = {
  clearMocks: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['\\\\node_modules\\\\'],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  modulePaths: ['<rootDir>/src'],
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'JestEmptyComponent.tsx'),
  },
}

export default config
