import { useState } from 'react'
import { action } from '@storybook/addon-actions'

import { Button } from './Button'

export default {
	title: 'Button',
	component: Button,
	args: {
		children: 'My Button',
		onClick: action('clicou!'),
	},
}

export const Default = {}

export const Regular = {
	args: {
		width: '207px',
		height: '48px',
	},
}

export const StyledSystemProps = {
	args: {
		children: 'My New Button',
		px: 's4',
		py: 's3',
	},
	argTypes: {
		px: {
			control: 'select',
			options: ['s1', 's2', 's3', 's3', 's4', 's5'],
			table: {
				category: 'Styled System',
			},
		},
		py: {
			control: 'select',
			options: ['s1', 's2', 's3', 's3', 's4', 's5'],
			table: {
				category: 'Styled System',
			},
		},
	},
}

export const ButtonWithHooks = {
	name: 'Renamed: Button With Hooks',
	render: ({ ...args }) => {
		const [btnNumber, setBtnNumber] = useState(0)

		const handleOnChange = () => {
			setBtnNumber((btnNumber) => btnNumber + 1)
		}

		return (
			<Button {...args} onClick={handleOnChange}>
				My New Button: {btnNumber}
			</Button>
		)
	},
}
