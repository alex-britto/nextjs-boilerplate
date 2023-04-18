import { Input } from "./Input"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "My Components/Input",
  component: Input,
  tags: ["autodocs"],
  args: {},
  argTypes: {
    placeholder: {
      control: "text",
    },
    value: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
}

export const Default = {}

/** Este é um input regular */
export const Regular = {
  args: {
    placeholder: "My input",
  },
}

export const Disabled = {
  args: {
    placeholder: "My input",
    disabled: true,
  },
}
