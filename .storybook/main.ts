import type { StorybookConfig } from '@storybook/nextjs';
const path = require('path');

const config: StorybookConfig = {
  stories: [
    '../component/**/*.stories.mdx',
    '../component/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@storybook/addon-styling',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  webpackFinal: async (config: any, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ComponentFarm': path.resolve(__dirname, '../component'),
      '@ApiFarm': path.resolve(__dirname, '../src/api'),
      '@HookFarm': path.resolve(__dirname, '../src/hook'),
    };

    // TypeScript에 대한 웹팩 규칙 추가
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [
          ['react-app', { flow: false, typescript: true }],
          require.resolve('@emotion/babel-preset-css-prop'),
        ],
      },
    });

    // .ts, .tsx 확장자 지원 추가
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
