import { TextField } from "./TextField"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "TextField",
  component: TextField,
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
