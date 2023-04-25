import { ReactNode } from 'react'

import { Column, Navbar } from '@/components'

export const LoggedLayout = ({ children }: { children: ReactNode }) => {
	return (
		<>
			<Navbar />
			<Column width='80%' mx='auto'>
				{children}
			</Column>
		</>
	)
}
