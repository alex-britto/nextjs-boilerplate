import {
  border,
  boxShadow,
  color,
  compose,
  layout,
  position,
  space,
} from "styled-system";

export const spaceLayoutUtilities = compose(
  space,
  layout,
  color,
  position,
  border,
  boxShadow
);
