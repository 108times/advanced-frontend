export default {
  clearMocks: true,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['\\\\node_modules\\\\'],
  rootDir: '../../',
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
}
