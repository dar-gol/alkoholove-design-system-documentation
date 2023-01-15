import React from "react";

import Toggle from "./Toggle";

export default {
  title: "Pole typu Toggle",
  component: Toggle,
  parameters: {
    docs: {
      description: {
        component: `
Pole typu Toggle służy do wprowadzenia wartości TAK/NIE przez użytkownika.
Nie zalecamy korzystania z pola wyboru w przypadku gdy potrzebujemy wartości TAK/NIE.
Zalecamy dodanie przynajmniej ikonki gdy wartość jest TAK oraz dodanie kolorów wyłącznie z palety kolorów.
W większości przypadków należy dodawać tytuł oraz zmienić kolor tła względem 
koloru tła kontenera, lecz kolor ten nie powinnien być mocno odbiegający.
Można nie dodać tytułu (wtedy należy nie podawać koloru tła) w przypadku kiedy 
oczywiste jest do czego służy te pole, ale konieczne jest podanie w takim przypadku
obu ikonek. Toggle stosujemy tylko wyłącznie, gdy akcja wykona się natychmiastowo. W 
innym przypadku należy korzystać z Checkbox.
        `,
      },
    },
  },
  argTypes: {
    leftColor: {
      description:
        "Kolor który wyświetla się po wybraniu wartości po lewej stronie",
    },
    rightColor: {
      description:
        "Kolor który wyświetla się po wybraniu wartości po prawej stronie",
    },
    leftIcon: {
      description:
        "Ikonka wyświetlająca się po lewej stronie. Może być dowolna z zestawu ikonek.",
      control: "select",
      options: [
        "Bez ikonki",
        "icon-More",
        "icon-sun",
        "icon-night",
        "icon-Plus",
        "icon-Error",
        "icon-Success",
      ],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "Bez ikonki" },
      },
    },
    rightIcon: {
      description:
        "Ikonka wyświetlająca się po prawej stronie. Może być dowolna z zestawu ikonek.",
      control: "select",
      options: [
        "Bez ikonki",
        "icon-More",
        "icon-sun",
        "icon-night",
        "icon-Plus",
        "icon-Error",
        "icon-Success",
      ],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "Bez ikonki" },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Toggle {...args} />;

export const toggle = Template.bind({});
toggle.args = {
  leftIcon: "icon-sun",
  leftColor: "#F1DB35",
  rightIcon: "icon-night",
  rightColor: "#47474A",
  backgroundColor: "#E8E8E8",
  title: "wartość",
};
