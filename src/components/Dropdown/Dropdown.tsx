import styled, { css } from "styled-components"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

interface DropdownProps {
  triggerText: string
  options: {
    label: string
    onClick?: VoidFunction
  }[]
}

export const Dropdown = ({ triggerText, options }: DropdownProps) => {
  const RenderMenuItems = () => {
    return options.map(({ label, onClick }, index) => {
      return (
        <MenuItem key={Math.random() + index} onClick={onClick}>
          {label}
        </MenuItem>
      )
    })
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <StyledButton>{triggerText}</StyledButton>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <MenuContent align="end" sideOffset={5}>
          {RenderMenuItems()}
          <DropdownArrow />
        </MenuContent>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

const StyledButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;

    padding: 8px;

    background-color: transparent;
    border-radius: 8px;

    &:hover {
      background-color: ${theme.colors.white.medium};
    }
  `};
`

const MenuContent = styled(DropdownMenu.Content)`
  ${({ theme }) => css`
    border-radius: 4px;
    border: 2px solid ${theme.colors.white.dark};
    background-color: ${theme.colors.white.default};
  `};
`

const MenuItem = styled(DropdownMenu.Item)`
  ${({ theme }) => css`
    min-width: 150px;
    padding: 10px 8px;

    font-size: 14px;

    cursor: pointer;

    border-bottom: 1px solid ${theme.colors.gray};

    &:hover {
      background-color: ${theme.colors.white.medium};
    }
  `}
`

const DropdownArrow = styled(DropdownMenu.Arrow)`
  ${({ theme }) => css`
    fill: ${theme.colors.white.dark};
  `}
`
