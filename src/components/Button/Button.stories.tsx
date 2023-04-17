import { useState } from "react"
import { action } from "@storybook/addon-actions"

import { Button } from "./Button"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "My Components/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "My Button",
    onClick: action("clicou!"),
  },
  argTypes: {
    margin: { control: { type: "number", min: 0 } },
  },

  parameters: {
    controls: {
      exclude: ["as", "ref", "theme", "forwardedAs"],
    },
  },
}

export const Default = {}

/** Este é um botão regular */
export const Regular = {
  args: {
    width: "207px",
    height: "48px",
  },
}

export const StyledSystemProps = {
  args: {
    children: "My New Button",
    px: "s4",
    py: "s3",
  },
  argTypes: {
    px: { control: "select", options: ["s1", "s2", "s3", "s3", "s4", "s5"] },
  },
}

export const ButtonWithHooks = {
  name: "Renamed: Button With Hooks",
  render: ({ ...args }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [btnNumber, setBtnNumber] = useState(0)

    const handleOnChange = () => {
      setBtnNumber((btnNumber) => btnNumber + 1)
    }

    return (
      <Button onClick={handleOnChange} {...args}>
        My Button: {btnNumber}
      </Button>
    )
  },
}
