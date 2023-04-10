import styled, { css } from "styled-components"

import { DisplayProps } from "@/shared/types/styledSystem"
import { displayUtilities } from "@/shared/utils/styledUtilities"

export const Input = styled.input<DisplayProps>(
  displayUtilities,
  ({ theme }) => css`
    padding: ${theme.spaces.s2};

    border-radius: 4px;
    border: 1px solid ${theme.colors.white.light};
  `
)
