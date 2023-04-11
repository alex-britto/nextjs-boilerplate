import "styled-components"

import theme from "./theme"

type Theme = typeof theme

type ThemeColors = {
  primary: string
  secondary: string
  dark: string
  black: string
  gray: string
  white: {
    default: string
    light: string
    medium: string
    dark: string
  }
  blue: {
    light: string
    medium: string
    dark: string
  }
}

type ThemeSpace = {
  s1: string
  s2: string
  s3: string
  s4: string
  s5: string
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {
    colors: ThemeColors
    space: ThemeSpace
  }
}
