import { ChangeEvent, FormEvent, useState } from "react"
import styled, { css } from "styled-components"
import { Button, Input } from "@/components"
import { UserProps } from "@/shared/interfaces"

interface LoginFormProps {
  onFormSubmit: (values: UserProps) => void
}

export const LoginForm = ({ onFormSubmit }: LoginFormProps) => {
  const [formValues, setFormValues] = useState<UserProps>({
    user: "",
    password: "",
  })

  const handleSubmit = (e: FormEvent<EventTarget>) => {
    e.preventDefault()
    onFormSubmit(formValues)
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormValues(
      (oldState) =>
        ({
          ...oldState,
          [event.target.name]: event.target.value,
        } as UserProps)
    )
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <h1>Acessar</h1>
      <Input
        name="user"
        value={formValues.user}
        placeholder="Usuário"
        data-cy="user-input"
        onChange={handleInputChange}
        mb="16px"
        width="250px"
      />
      <Input
        type="password"
        name="password"
        value={formValues.password}
        placeholder="Senha"
        data-cy="password-input"
        onChange={handleInputChange}
        mb="32px"
        width="250px"
      />
      <Button data-cy="login-button">Fazer Login</Button>
    </StyledForm>
  )
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
`
