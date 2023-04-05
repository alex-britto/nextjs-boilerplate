import type { AppProps } from "next/app"
import { ThemeProvider } from "styled-components"
import { UserProvider } from "@/shared/providers"
import { GlobalStyles, theme } from "@/theme"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  )
}

export default App
