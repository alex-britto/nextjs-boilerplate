import styled, { css } from "styled-components";
import Input from "@/components/input";
import Button from "@/components/button";

interface LoginFormProps {}

function LoginForm(props: LoginFormProps) {
  const {} = props;

  return (
    <StyledForm>
      <h1>Acessar</h1>
      <Input placeholder="Usuário" mb="16px" width="250px" />
      <Input placeholder="Senha" mb="32px" width="250px" />
      <Button>Fazer Login</Button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;

  h1 {
    margin-bottom: 32px;
    text-align: center;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-top: 2px solid ${theme.colors.white.medium};
    border-right: 2px solid ${theme.colors.white.medium};
    border-bottom: 2px solid ${theme.colors.white.medium};
  `}
`;

export default LoginForm;
