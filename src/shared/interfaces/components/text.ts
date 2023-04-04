import { IntrinsicElementsKeys } from "styled-components";

export interface TextProps {
  variant?: "bigger" | "big" | "medium" | "regular" | "small" | "tiny";
  as?: IntrinsicElementsKeys;
  color?: string;
  fontWeight?: string;
  before?: string;
}
