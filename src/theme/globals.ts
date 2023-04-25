import { createGlobalStyle } from 'styled-components'

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

  body, input, button, p, label {
    font-family: 'Open Sans', sans-serif;
  }
`
