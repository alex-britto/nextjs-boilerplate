import styled, { css } from "styled-components";
import { useRouter } from "next/router";
import { SpaceLayoutProps } from "@/shared/types/styledSystem";
import { spaceLayoutUtilities } from "@/shared/utils/styledUtilities";
import { Dropdown, Row } from "@/components";
import { clearToken } from "@/shared/helpers/token";

export const Navbar = (props: any) => {
  const router = useRouter();

  return (
    <StyledNavbar mb="16px">
      <span>P.O.C</span>
      <Row>
        <p>Olá Fulano de Tal</p>
        <Dropdown
          triggerText="Menu"
          options={[
            {
              label: "Logout",
              onClick: () => {
                clearToken();
                router.push("/");
              },
            },
          ]}
        />
      </Row>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav<SpaceLayoutProps>`
  ${spaceLayoutUtilities}

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  font-size: 18px;

  span {
    font-size: 32px;
  }

  p:first-of-type {
    margin-right: 16px;
  }

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-bottom: 2px solid ${theme.colors.white.dark};
  `}
`;
