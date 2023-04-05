import "styled-components";

import theme from "./theme";

type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: {
      primary: string;
      secondary: string;
      dark: string;
      black: string;
      gray: string;
      white: {
        default: string;
        light: string;
        medium: string;
        dark: string;
      };
      blue: {
        light: string;
        medium: string;
        dark: string;
      };
    };
    spaces: {
      s0: string;
      s1: string;
      s2: string;
    };
  }
}
