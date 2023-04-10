import {
  compose,
  border,
  boxShadow,
  color,
  flexbox,
  layout,
  position,
  space,
  typography,
} from "styled-system"

export const displayUtilities = compose(space, layout, flexbox, position)

export const decorationUtilities = compose(
  border,
  boxShadow,
  color,
  layout,
  typography
)
