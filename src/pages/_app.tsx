import type { AppProps } from 'next/app'

import { ThemeProvider } from 'styled-components'

import { GlobalStyles, theme } from '@/theme'

import { UserProvider } from '@/shared/providers/user'

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
