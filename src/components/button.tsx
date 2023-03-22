import React, { ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps, layout } from "styled-system";

interface ButtonProps extends ComponentPropsWithoutRef<"button">, SpaceProps {}

function Button(props: ButtonProps) {
  const { children } = props;

  return <StyledButton {...props}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  ${space}
  ${layout}
  cursor: pointer;
  border-radius: 4px;

  ${({ theme }) => css`
    padding: ${theme.spaces.s2};
    border: 2px solid ${theme.colors.blue.dark};
    background-color: ${theme.colors.blue.dark};
    color: ${theme.colors.primary};
  `}
`;

export default Button;
