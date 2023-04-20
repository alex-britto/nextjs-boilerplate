import styled, { css, IntrinsicElementsKeys } from 'styled-components'

import { DisplayProps, DecorationProps } from '@/shared/types/styledSystem'
import {
	decorationUtilities,
	displayUtilities,
} from '@/shared/utils/styledUtilities'

interface TypographyProps extends DisplayProps, DecorationProps {
	variant?: keyof typeof TEXT_VARIANTS
	as?: IntrinsicElementsKeys
}

const TEXT_VARIANTS = {
	bigger: {
		'font-size': '40px',
		'line-height': '56px',
	},
	big: {
		'font-size': '32px',
		'line-height': '48px',
	},
	medium: {
		'font-size': '24px',
		'line-height': '32px',
	},
	regular: {
		'font-size': '16px',
		'line-height': '24px',
	},
	small: {
		'font-size': '14px',
		'line-height': '20px',
	},
	tiny: {
		'font-size': '12px',
		'line-height': '16px',
	},
}

export const Typography = styled.p<TypographyProps>(
	({ variant = 'regular' }) => css`
		font-weight: 400;
		font-size: ${TEXT_VARIANTS[variant]['font-size']};
		line-height: ${TEXT_VARIANTS[variant]['line-height']};
	`,
	displayUtilities,
	decorationUtilities
)
