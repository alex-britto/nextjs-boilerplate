import { FC } from "react"

import { useForm } from "react-hook-form"

import { Button, Column, Input, Row, Text } from "@/components"

import { useUser } from "@/shared/providers"
import { UserProps } from "@/shared/interfaces/user"
import { setTokenLS, setUserLS } from "@/shared/helpers"

import { theme } from "@/theme"

export const Login: FC = () => {
  const { setToken, setUser } = useUser()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({
    // resolver: yupResolver(schema),
  })

  const handleLogin = () => {
    setToken("MY_TOKEN")
    setUser({ email: "my_email", password: "123456" })

    setTokenLS("MY_TOKEN")
    setUserLS({ email: "my_email", password: "123456" })
  }

  return (
    <Column
      height="100vh"
      justifyContent="center"
      backgroundColor={theme.colors.gray}
    >
      <Row
        m="0 auto"
        width="880px"
        height="504px"
        borderRadius="8px"
        backgroundColor={theme.colors.white.default}
        boxShadow={`4px 6px 30px ${theme.colors.white.dark}`}
      >
        <Column width="544px" justifyContent="center">
          <form onSubmit={handleSubmit(handleLogin)}>
            <Column width="320px" m="0 auto">
              <Text
                mb="32px"
                fontWeight="700"
                variant="medium"
                textAlign="center"
              >
                Entrar
              </Text>

              <Text variant="small" fontWeight="600">
                E-mail*
              </Text>
              <Input
                placeholder="e-mail"
                height="48px"
                mt="8px"
                mb="24px"
                {...register("email")}
              />
              <Text variant="tiny" className="mt-2 mb-6" color="red">
                E-mail incorreto
              </Text>

              <Text variant="small" fontWeight="600" mt="80px">
                Senha*
              </Text>
              <Input
                placeholder="senha"
                height="48px"
                mt="8px"
                {...register("password")}
              />
              <Text variant="tiny" className="mt-2 mb-8" color="red">
                Senha incorreta
              </Text>

              <Button width="207px" height="48px" m="32px auto 0">
                Entrar
              </Button>
            </Column>
          </form>
        </Column>
        <Column
          width="336px"
          alignItems="center"
          justifyContent="center"
          color={theme.colors.white.default}
          backgroundColor={theme.colors.primary}
          borderTopRightRadius="8px"
          borderBottomRightRadius="8px"
        >
          <Text variant="medium" fontWeight="700" mb="24px">
            Olá, tech solver!
          </Text>
          <Text>Você está no Boilerplate da Nav9</Text>
        </Column>
      </Row>
    </Column>
  )
}
