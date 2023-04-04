import styled, { css } from "styled-components";

import { SpaceLayoutProps } from "@/shared/types/styledSystem";
import { spaceLayoutUtilities } from "@/shared/utils/styledUtilities";

export const Input = styled.input<SpaceLayoutProps>`
  ${spaceLayoutUtilities}

  ${({ theme }) => css`
    padding: ${theme.spaces.s2};

    border-radius: 4px;
    border: 1px solid ${theme.colors.white.light};
  `}
`;
