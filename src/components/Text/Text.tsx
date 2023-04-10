import styled, { css } from "styled-components";

import { TextProps } from "./interfaces";

const TEXT_VARIANTS = {
  bigger: {
    "font-size": "40px",
    "line-height": "56px",
  },
  big: {
    "font-size": "32px",
    "line-height": "48px",
  },
  medium: {
    "font-size": "24px",
    "line-height": "32px",
  },
  regular: {
    "font-size": "16px",
    "line-height": "24px",
  },
  small: {
    "font-size": "14px",
    "line-height": "20px",
  },
  tiny: {
    "font-size": "12px",
    "line-height": "16px",
  },
};

export const Text = styled.p<TextProps>`
  ${({
    fontWeight = "400",
    variant = "regular",
    color,
    textAlign = "start",
    mb = "0px",
  }) => css`
    text-align: ${textAlign};

    font-weight: ${fontWeight};
    font-size: ${TEXT_VARIANTS[variant]["font-size"]};
    line-height: ${TEXT_VARIANTS[variant]["line-height"]};

    margin-bottom: ${mb};

    color: ${color};
  `}
`;
