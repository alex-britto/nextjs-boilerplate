import styled, { css } from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  height: 350px;
  justify-content: flex-end;
  min-width: 600px;
  background-color: black;
  border-radius: 8px;

  ${({ theme }) => css`
    background-color: ${theme.colors.dark};
  `};
`;

export const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
