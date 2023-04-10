import {
  BorderProps,
  BoxShadowProps,
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from "styled-system"

export type DisplayProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps

export type DecorationProps = BorderProps &
  ColorProps &
  BoxShadowProps &
  TypographyProps
