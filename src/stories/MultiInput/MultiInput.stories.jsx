import React from "react";
import { MultiInput } from "./MultiInput";

export default {
  title: "Pole typu Wielotekstowego",
  component: MultiInput,
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
    title: {
      description: "Tytuł wskazujący zawartość pola.",
    },
    value: {
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
        defaultValue: { summary: "[]" },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <MultiInput {...args} />;

export const multiInput = Template.bind({});
multiInput.args = {
  title: "Tytuł pola wielotekstowego",
};
