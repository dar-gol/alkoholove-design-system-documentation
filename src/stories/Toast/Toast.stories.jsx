import React from "react";

import Toast from "./Toast";

export default {
  title: "Toast",
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: `
Toast służy do informowania użytkownika o przebiegu wykonania akcji.

        `,
      },
    },
  },
  argTypes: {
    text: {
      description:
        "Text zawarty w Toastcie",
    },
    title: {
      description: 'Tytuł Toasta'
    },
    type: {
      description:
        "Typ Toasta.",
      control: "select",
      options: [
        "info",
        "success",
        "warning",
        "critical",
      ],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Toast {...args} />;

export const bar = Template.bind({});
bar.args = {
  text: 'Tekst zawarty w Toastcie',
  type: 'info',
  title: 'Tytuł'
};
