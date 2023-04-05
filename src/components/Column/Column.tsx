import styled, { css } from "styled-components";

import { Row } from "@/components";
import { ColumnProps } from "@/shared/interfaces/components/column";

export const Column = styled(Row)<ColumnProps>`
  ${({
    justifyContent = "flex-start",
    textAlign = "start",
    alignItems = "stretch",
  }) => css`
    flex-direction: column;
    text-align: ${textAlign};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
  `}
`;
