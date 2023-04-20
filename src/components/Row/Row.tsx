import styled, { css } from 'styled-components'

import { DisplayProps, DecorationProps } from '@/shared/types/styledSystem'
import {
	displayUtilities,
	decorationUtilities,
} from '@/shared/utils/styledUtilities'

export const Row = styled.div<DisplayProps & DecorationProps>(
	() => css`
		display: flex;
	`,
	decorationUtilities,
	displayUtilities
)
