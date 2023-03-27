import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import styled, { css } from "styled-components";

interface DropdownProps {
  triggerText: string;
  options: [
    {
      label: string;
      onClick: VoidFunction;
    }
  ];
}

export function Dropdown({ triggerText, options }: DropdownProps) {
  const RenderMenuItems = () => {
    return options.map(({ label, onClick }, index) => {
      return (
        <MenuItem key={Math.random() + index} onClick={onClick}>
          {label}
        </MenuItem>
      );
    });
  };

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
  );
}

const StyledButton = styled.button`
  font-size: 18px;
  background-color: transparent;
`;

const MenuContent = styled(DropdownMenu.Content)`
  padding: 8px 16px;
  border-radius: 4px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border: 2px solid ${theme.colors.white.dark};
  `}
`;

const MenuItem = styled(DropdownMenu.Item)`
  min-width: 150px;
`;

const DropdownArrow = styled(DropdownMenu.Arrow)`
  ${({ theme }) => css`
    fill: ${theme.colors.white.dark};
  `}
`;
