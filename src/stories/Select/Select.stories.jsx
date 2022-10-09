import React from "react";
import { Select } from "./Select";

export default {
  title: "Pole typu Wyboru",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
Pole typu wielotekstowego służy do pobierania wartości od użytkownika, jeśli
wartość dotyczy jednej rzeczy i potrzebujemy kilka wartości oraz wartością 
nie są elementy znane tylko tekst lub wartość numeryczna.
        `,
      },
    },
  },
  argTypes: {
    placeholder: {
      description: "Tytuł wskazujący zawartość pola.",
    },
    value: {
      description: "Wartość pola wielotekstowego.",
      control: "array",
      table: {
        type: {
          summary: `
            {
              label: "",
              value: "",
            }
          `,
        },
        defaultValue: { summary: "{}" },
      },
    },
    options: {
      description: "Wartość pola wielotekstowego.",
      control: "array",
      table: {
        type: {
          summary: `[
            {
              label: "",
              value: "",
            },
            ...
          ]`,
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Select {...args} />;

export const select = Template.bind({});
select.args = {
  placeholder: "Tytuł pola wielotekstowego",
  options: [
    {
      label: "Pierwsza opcja",
      value: "1",
    },
    {
      label: "Druga opcja",
      value: "2",
    },
    {
      label: "Trzecia opcja",
      value: "3",
    },
  ],
  type: "creatable",
};
