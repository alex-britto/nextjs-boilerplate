import styled, { css } from "styled-components"

import { DisplayProps } from "@/shared/types/styledSystem"
import { displayUtilities } from "@/shared/utils/styledUtilities"

export const Button = styled.button<DisplayProps>(
  displayUtilities,
  ({ theme }) => css`
    padding: 0 ${theme.spaces.s2};

    color: ${theme.colors.white.default};
    background-color: ${theme.colors.primary};
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;

    border-radius: 4px;
  `
)
