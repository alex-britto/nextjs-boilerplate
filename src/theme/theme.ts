import { DefaultTheme } from "styled-components"

const colors = {
  primary: "#3F4DF9",
  secondary: "#f8f9fb",
  dark: "#2E3440",
  black: "#000000",
  gray: "#f2f2f2",
  white: {
    default: "#ffffff",
    light: "#909090",
    medium: "#E5E9F0",
    dark: "#e6e6e6",
  },
  blue: {
    light: "#88C0D0",
    medium: "#81A1C1",
    dark: "#5E81AC",
  },
}

const space = {
  s1: "4px",
  s2: "8px",
  s3: "16px",
  s4: "24px",
  s5: "32px",
}

export const theme: DefaultTheme = {
  colors,
  space,
}
