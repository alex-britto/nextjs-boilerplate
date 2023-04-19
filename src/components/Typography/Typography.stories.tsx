import { Typography } from "./Typography"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "Typography",
  component: Typography,
  args: {
    children: "My text",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["span", "p", "h6", "h5", "h4", "h3", "h2", "h1"],
      table: {
        type: { summary: ["span", "p", "h6", "h5", "h4", "h3", "h2", "h1"] },
      },
    },
  },
}

export const Default = {}

export const AsAnotherElement = {
  args: {
    as: "h1",
  },
}
