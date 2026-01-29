import type { StorybookConfig } from "@storybook/react-webpack5";
import * as path from "path";
const webpack = require("webpack");
const toPath = (_path: any) => path.join(process.cwd(), _path);;

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../src/**/*.stories.@(tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
    "@storybook/addon-webpack5-compiler-babel"
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  webpackFinal: (config: any) => {
    return {
      ...config,
      // https://github.com/storybookjs/storybook/issues/13277#issuecomment-751747964
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
        fallback: {
          vm: require.resolve("vm-browserify"),
          stream: require.resolve("stream-browserify"),
          os: require.resolve("os-browserify/browser"),
          crypto: require.resolve("crypto-browserify"),
          path: require.resolve("path-browserify"),
          buffer: require.resolve("buffer"),
          "process/browser": require.resolve("process/browser"),
          util: require.resolve("util/"),
          events: require.resolve("events/"),
        },
      },
      plugins: [
        ...config.plugins,
        new webpack.ProvidePlugin({
          process: 'process/browser',
          Buffer: ['buffer', 'Buffer'],
        })
      ]
    };
  },
  docs: {
    autodocs: true,
  },
};
export default config;
