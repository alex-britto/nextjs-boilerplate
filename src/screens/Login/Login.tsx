import { Button, Column, Input, Row, Text } from "@/components";

export const Login = () => {
  return (
    <Column>
      <Row>
        <Column>
          <Text>Entrar</Text>
          <form>
            <Text>E-mail*</Text>
            <Input placeholder="e-mail" />

            <Text>Senha*</Text>
            <Input placeholder="senha" />
            <Button>Entrar</Button>
          </form>
        </Column>
        <Column></Column>
      </Row>
    </Column>
  );
};
