import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { UserProvider } from '@/shared/providers/user'

import { GlobalStyles, theme } from '@/theme'

const queryClient = new QueryClient()

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<QueryClientProvider client={queryClient}>
			<UserProvider>
				<ThemeProvider theme={theme}>
					<GlobalStyles />
					<Component {...pageProps} />
				</ThemeProvider>
			</UserProvider>
		</QueryClientProvider>
	)
}

export default App
