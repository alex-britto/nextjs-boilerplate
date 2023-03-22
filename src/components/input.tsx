import { ComponentPropsWithoutRef } from "react";
import styled, { css } from "styled-components";
import { space, SpaceProps, layout } from "styled-system";

interface InputProps extends ComponentPropsWithoutRef<"input">, SpaceProps {}

function Input(props: InputProps) {
  return <StyledInput {...props} />;
}

const StyledInput = styled.input<InputProps>`
  ${space}
  ${layout}
  ${({ theme }) => css`
    padding: ${theme.spaces.s2};
    border: 2px solid ${theme.colors.white.light};
    background-color: ${theme.colors.secondary};
    border-radius: 4px;
  `}
`;

export default Input;
