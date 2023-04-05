import { Button, Column, Input, Row, Text } from "@/components";

import { theme } from "@/theme";

export const Login = () => {
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
          <form>
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
              <Input placeholder="e-mail" height="48px" mt="8px" mb="24px" />

              <Text variant="small" fontWeight="600" mt="80px">
                Senha*
              </Text>
              <Input placeholder="senha" height="48px" mt="8px" />
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
          <Text>Você está no Cockpit,</Text>
          <Text>o software de gestão da Nav9.</Text>
        </Column>
      </Row>
    </Column>
  );
};
