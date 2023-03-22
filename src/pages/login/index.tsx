import styled, { css } from "styled-components";
import LoginForm from "./LoginForm";

interface LoginProps {}

function LoginPage(props: LoginProps) {
  const {} = props;

  return (
    <PageContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>
    </PageContainer>
  );
}

const FormContainer = styled.div`
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

const PageContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
  `};
`;

export default LoginPage;
