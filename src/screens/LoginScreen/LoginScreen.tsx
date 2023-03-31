import { UserProps } from "@/shared/interfaces";
import { LoginForm } from "./components/LoginForm";
import { useRouter } from "next/router";
import { FormContainer, PageContainer } from "./styles";
import { setToken } from "@/shared/helpers/token";
import Head from "next/head";

export const LoginScreen = () => {
  const router = useRouter();

  const handleFormSubmit = ({ user, password }: UserProps) => {
    if (user === "Teste" && password === "12345") {
      setToken("logado");
      router.push("/dashboard");
    }
  };

  return (
    <>
      <Head>
        <title>Linda Pagina Login</title>
      </Head>
      <PageContainer>
        <FormContainer>
          <LoginForm onFormSubmit={handleFormSubmit} />
        </FormContainer>
      </PageContainer>
    </>
  );
};
