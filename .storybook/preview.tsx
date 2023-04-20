import React from "react";
import type { Preview } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { theme } from "../src/theme";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      exclude: ["theme", "ref", "forwardedAs"],
      sort: "alpha",
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <div id="component-container" style={{ width: "fit-content" }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];

export default preview;
