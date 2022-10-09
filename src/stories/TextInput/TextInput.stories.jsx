import React from "react";

import { TextInput } from "./TextInput";

export default {
  title: "Pole tekstowe",
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: `
Pole tekstowe służy do pobierania wartości od użytkownika. Należy używać wszędzie
gdzie potrzebujemy uzyskać wartość tekstową numeryczną lub opis od użytkownika.
Zalecamy ustawianie ikonki zwiększa atrakcyjność oraz zrozumienie pola przez użytkownika.
        `,
      },
    },
  },
  argTypes: {
    state: {
      description: "Stan pola tekstowego",
      control: "select",
      options: ["default", "error", "success"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "default" },
      },
    },
    icon: {
      description: "Ikonka wyświetlana po lewej stronie",
      control: "select",
      options: [
        "Bez ikonki",
        "icon-search",
        "icon-Profil",
        "icon-Rate",
        "icon-Recomendation",
      ],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "icon-search" },
      },
    },
    placeholder: {
      description:
        "Placeholder wyświetlany jako przykładowa wartość. Zalecamy ustawiać.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "" },
      },
    },
    title: {
      description: "Tytuł pola tekstowego",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "" },
      },
    },
    error: {
      description:
        "Tekst, który zostanie wyświetlony jeśli stanem będzie error.",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "" },
      },
    },
    type: {
      description: "Typ pola tekstowego",
      control: "select",
      options: ["text", "number", "textarea"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "text" },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TextInput {...args} />;

export const Input = Template.bind({});
Input.args = {
  placeholder: "Wartość",
  error: "Tutaj wyświetla się błąd",
  state: "",
  icon: "",
  title: "Przykładowy tytuł",
  type: "text",
};
