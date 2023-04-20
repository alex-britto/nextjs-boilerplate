import { IntrinsicElementsKeys } from 'styled-components'

import { SpaceLayoutProps } from '@/shared/types/styledSystem'

export interface TextProps extends SpaceLayoutProps {
	variant?: 'bigger' | 'big' | 'medium' | 'regular' | 'small' | 'tiny'
	as?: IntrinsicElementsKeys
	color?: string
	fontWeight?: string
	textAlign?: string
	mb?: string
}
