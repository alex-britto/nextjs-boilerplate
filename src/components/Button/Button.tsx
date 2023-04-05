import styled, { css } from "styled-components";

import { SpaceLayoutProps } from "@/shared/types/styledSystem";
import { spaceLayoutUtilities } from "@/shared/utils/styledUtilities";

export const Button = styled.button<SpaceLayoutProps>`
  ${spaceLayoutUtilities}

  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  border-radius: 4px;

  ${({ theme }) => css`
    padding: 0 ${theme.spaces.s2};

    color: ${theme.colors.white.default};
    background-color: ${theme.colors.primary};
  `}
`;
