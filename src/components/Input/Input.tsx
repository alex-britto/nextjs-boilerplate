import styled, { css } from "styled-components"

import { DisplayProps } from "@/shared/types/styledSystem"
import { displayUtilities } from "../../shared/utils/styledUtilities"

/**
 * Storybook input description
 */

export const Input = styled.input<DisplayProps>(
  ({ theme }) => css`
    padding: ${theme.space.s3};

    border-radius: 4px;
    border: 1px solid ${theme.colors.white.light};
  `,
  displayUtilities
)
