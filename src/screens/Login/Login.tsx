import { FC } from "react";

import Head from "next/head";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button, Column, Input, Row, Text } from "@/components";

import { UserProps } from "@/shared/interfaces/user";
import { credentialsSchema } from "@/shared/schemas/credentials";

import { setUserLS } from "@/shared/helpers/user";

export const Login: FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserProps>({
    resolver: zodResolver(credentialsSchema),
  });

  const handleLogin = (data: UserProps) => {
    setUserLS(data);
    router.push("/dashboard");
  };

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
                <Text
                  mb="s5"
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
                  data-testid="email"
                  mt="s2"
                  {...(!errors.email && { mb: "24px" })}
                  {...register("email")}
                />
                {errors.email && (
                  <Text
                    color="red"
                    variant="small"
                    mb="24px"
                    data-testid="email-error"
                  >
                    {errors.email.message}
                  </Text>
                )}

                <Text variant="small" fontWeight="600">
                  Senha*
                </Text>
                <Input
                  placeholder="senha"
                  data-testid="password"
                  height="48px"
                  mt="s2"
                  {...register("password")}
                />
                {errors.password && (
                  <Text
                    color="red"
                    variant="small"
                    data-testid="password-error"
                  >
                    {errors.password.message}
                  </Text>
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
            <Text variant="medium" fontWeight="700" mb="s1">
              Olá, tech solver!
            </Text>
            <Text>Você está no Boilerplate da Nav9</Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};
