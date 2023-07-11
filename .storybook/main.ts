import type { StorybookConfig } from "@storybook/nextjs";
const path = require("path");

const config: StorybookConfig = {
  stories: [
    "../component/**/*.stories.mdx",
    "../component/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-storysource",
  ],
  webpackFinal: async (config: any, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../"),
    };

    return config;
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
