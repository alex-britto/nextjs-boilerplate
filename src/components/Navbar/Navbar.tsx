import { useRouter } from "next/router"

import styled, { css } from "styled-components"

import { Dropdown, Row, Text } from "@/components"

import { clearUser } from "@/shared/helpers/user"
import { DisplayProps } from "@/shared/types/styledSystem"
import { displayUtilities } from "@/shared/utils/styledUtilities"

interface NavbarProps {}

export const Navbar = ({}: NavbarProps) => {
  const router = useRouter()

  return (
    <StyledNavbar mb="s5">
      <Text fontWeight="600">Boilerplate</Text>
      <Row>
        <Dropdown
          triggerText="Nome do usuário"
          options={[
            {
              label: "Sair",
              onClick: () => {
                router.push("/")
                clearUser()
              },
            },
          ]}
        />
      </Row>
    </StyledNavbar>
  )
}

const StyledNavbar = styled.nav<DisplayProps>(
  ({ theme }) => css`
    width: 100%;

    padding: 20px 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 32px;
    }

    p:first-of-type {
      margin-right: 16px;
    }

    border-bottom: 2px solid ${theme.colors.white.dark};

    background-color: ${theme.colors.white.default};
  `,
  displayUtilities
)
