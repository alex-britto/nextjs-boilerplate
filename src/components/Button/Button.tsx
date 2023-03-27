import styled, { css } from "styled-components";
import { SpaceLayoutProps } from "@/shared/types/styledSystem";
import { spaceLayoutUtilities } from "@/shared/utils/styledUtilities";

export const Button = styled.button<SpaceLayoutProps>`
  ${spaceLayoutUtilities}

  cursor: pointer;
  border-radius: 4px;

  ${({ theme }) => css`
    padding: ${theme.spaces.s2};
    border: 2px solid ${theme.colors.blue.dark};
    background-color: ${theme.colors.blue.dark};
    color: ${theme.colors.primary};
  `}
`;
