import { FC } from "react"

import Head from "next/head"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button, Column, TextField, Row, Typography } from "@/components"

import { UserProps } from "@/shared/interfaces/user"
import { credentialsSchema } from "@/shared/schemas/loginCredentials"

import { setUserLS } from "@/shared/helpers/user"

export const Login: FC = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: zodResolver(credentialsSchema),
  })

  const handleLogin = (data: UserProps) => {
    setUserLS(data)
    router.push("/dashboard")
  }

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Column height="100vh" backgroundColor="gray" justifyContent="center">
        <Row
          m="0 auto"
          width="880px"
          height="504px"
          borderRadius="8px"
          backgroundColor="white.default"
          boxShadow={`4px 6px 30px`}
          color="white.dark"
        >
          <Column width="544px" justifyContent="center">
            <form onSubmit={handleSubmit(handleLogin)}>
              <Column width="320px" m="0 auto" color="black">
                <Typography
                  mb="s5"
                  fontWeight="700"
                  variant="medium"
                  textAlign="center"
                >
                  Entrar
                </Typography>

                <Typography variant="small" fontWeight="600">
                  E-mail*
                </Typography>
                <TextField
                  placeholder="e-mail"
                  height="48px"
                  data-testid="email"
                  mt="s2"
                  {...(!errors.email && { mb: "24px" })}
                  {...register("email")}
                />
                {errors.email && (
                  <Typography color="red" variant="small" mb="24px">
                    {errors.email.message}
                  </Typography>
                )}

                <Typography variant="small" fontWeight="600">
                  Senha*
                </Typography>
                <TextField
                  placeholder="senha"
                  data-testid="password"
                  height="48px"
                  mt="s2"
                  {...register("password")}
                />
                {errors.password && (
                  <Typography color="red" variant="small">
                    {errors.password.message}
                  </Typography>
                )}

                <Button width="207px" height="48px" mx="auto" mt="s5">
                  Entrar
                </Button>
              </Column>
            </form>
          </Column>
          <Column
            width="336px"
            alignItems="center"
            justifyContent="center"
            color="white.default"
            backgroundColor="primary"
            borderTopRightRadius="8px"
            borderBottomRightRadius="8px"
          >
            <Typography variant="medium" fontWeight="700" mb="s1">
              Olá, tech solver!
            </Typography>
            <Typography>Você está no Boilerplate da Nav9</Typography>
          </Column>
        </Row>
      </Column>
    </>
  )
}
