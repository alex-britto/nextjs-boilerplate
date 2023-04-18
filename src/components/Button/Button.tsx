import styled, { css } from "styled-components"

import { DisplayProps } from "@/shared/types/styledSystem"
import { displayUtilities } from "../../shared/utils/styledUtilities"

/**
 * Storybook button description
 */

export const Button = styled.button<DisplayProps>(
  ({ theme }) => css`
    padding: 0 ${theme.space.s3};

    color: ${theme.colors.white.default};
    background-color: ${theme.colors.primary};
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;

    border-radius: 4px;
  `,
  displayUtilities
)
