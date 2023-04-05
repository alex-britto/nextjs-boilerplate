import styled from "styled-components";

import { SpaceLayoutProps } from "@/shared/types/styledSystem";
import { spaceLayoutUtilities } from "@/shared/utils/styledUtilities";

interface RowProps extends SpaceLayoutProps {}

export const Row = styled.div<RowProps>`
  ${spaceLayoutUtilities}

  display: flex;
`;
