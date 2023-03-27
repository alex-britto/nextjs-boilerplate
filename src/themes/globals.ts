import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-family: "Arial";
  }

  ${({ theme }) =>
    css`
      html {
        background-color: ${theme.colors.secondary};
      }
    `}
  
`;
