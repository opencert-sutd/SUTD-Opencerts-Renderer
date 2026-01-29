import type { Preview } from "@storybook/react";
import React from "react";
import "../src/main.css";

const preview: Preview = {
  decorators: [(storyFn) => <>{storyFn()}</>],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
