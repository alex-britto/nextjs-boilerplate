import styled, { css } from 'styled-components'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import { theme } from '@/theme'

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
				<MenuContent align='end' sideOffset={5}>
					{RenderMenuItems()}
					<DropdownArrow />
				</MenuContent>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	)
}

const StyledButton = styled.button`
	cursor: pointer;

	background-color: transparent;
`

const MenuContent = styled(DropdownMenu.Content)`
	padding: 8px 16px;

	border-radius: 4px;

	${({ theme }) => css`
		border: 2px solid ${theme.colors.white.dark};

		background-color: ${theme.colors.white.default};
	`};
`

const MenuItem = styled(DropdownMenu.Item)`
	min-width: 150px;

	font-size: 14px;

	padding: 10px 0px;

	border-bottom: 1px solid ${theme.colors.gray};
`

const DropdownArrow = styled(DropdownMenu.Arrow)`
	${({ theme }) => css`
		fill: ${theme.colors.white.dark};
	`}
`
