import {
  SpaceProps,
  LayoutProps,
  FlexProps,
  ColorProps,
  PositionProps,
  BorderRadiusProps,
  BoxShadowProps,
} from "styled-system";

export type SpaceLayoutProps = SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps &
  BorderRadiusProps &
  BoxShadowProps;

export type SpaceLayoutFlexProps = SpaceLayoutProps &
  FlexProps &
  ColorProps &
  PositionProps &
  BorderRadiusProps &
  BoxShadowProps;
