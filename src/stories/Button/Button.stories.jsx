import React from "react";

import { Button } from "./Button";

export default {
  title: "Przycisk",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `
Przycisk służy do wykonania jakiejś akcji zarówno otwarcie popupu lub nawigacja do innej strony.
Mamy cztery możlwiości: Primary może służyć jako call to action lub jako opcja
akceptacji, lub ta na którą chcemy nakierować użytkownika, wskazać mu akcję.
Druga wersja Secondary służy jako drugorzędna opcja. Na przykład opcja anulowania, usunięcia, wyjścia z popupu.
Przyciski można stosować również jako linki ale nie w tekście (do linków w tekście służą normalne linki). Na przykład można zastosować jako link po wykonaniu jakiejś akcji pokazaniu popupu i wskazanie użytkownikowi, że można przejść na
konkretną podstronę. Kolejna opcja Ghost. Stosowana jako trzecia opcja lub druga bardzo mało istotna najczęściej jako niezwiazana z danymi działaniami lub mało istotnymi.
Bardzo rzadko stosuje się ten przycisk. Czwarta opcja Fab (Przycisk pływający) stosuje się do rozwijania/zwijania podstron lub elementow 
na stronie. Można również zastosować jako element na stałe umieszczony w rogu. Zalecamy korzystanie z paddingów 20px na obie strony horyzontalnie lub jeśli chcemy żeby przycisk 
zwracał większą uwagę zalecamy zastosować szerokość 200px lub 240px.
        `,
      },
    },
  },
  argTypes: {
    type: {
      description: "W celu podglądu możesz wybrać różny typ przycisków",
      control: "select",
      options: ["Primary", "Secondary", "Ghost", "Fab"],
    },
    padding: {
      description: "Mozliwość ustawienia paddingu przycisku",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: 0 },
      },
    },
    margin: {
      description: "Możlwiość ustawienia marginesów przycisku",
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: 0 },
      },
    },
    label: {
      description:
        "Może być JSX. Ustawiona jako children w props. Służy do wyświetlenia napisu w buttonie",
      table: {
        type: {
          summary: "JSX | string",
        },
      },
    },
    fabType: {
      description: "Typ pływającego przycisku",
      control: "select",
      options: ["primary", "secondary", "red", "green"],
      table: {
        type: {
          summary: "string",
        },
        defaultValue: { summary: "secondary" },
      },
    },
    fabIcon: {
      description:
        "Ikonka do pływającego przycisku. Wszystkie ikonki z zestawu ikonek mogą być używane.",
      control: "select",
      options: ["icon-Beer", "icon-Camera", "icon-Error", "icon-Profil"],
      table: {
        type: {
          summary: "string",
        },
      },
    },
    fabText: {
      description:
        "Tekst do pływającego przycisku. Jest używany tylko wtedy kiedy nie jest zdefiniowana ikonka.",
      table: {
        type: {
          summary: "string",
        },
      },
      control: "text",
    },
    fabSize: {
      description: "Wielkość przycisku pływającego",
      table: {
        type: {
          summary: "number",
        },
      },
      control: "select",
      options: [30, 40, 50],
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: "Primary",
  padding: "0 20px",
  margin: "0",
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "Secondary",
  label: "Button",
  size: "large",
  padding: "0 20px",
  margin: "0",
};

export const Ghost = Template.bind({});
Ghost.args = {
  type: "Ghost",
  label: "Button",
  padding: "0 20px",
  margin: "0",
};

export const Fab = Template.bind({});
Fab.args = {
  type: "Fab",
  label: "Button",
  padding: "0 20px",
  margin: "0",
  fabType: "primary",
  fabIcon: "icon-Error",
  fabText: "",
  fabSize: 50,
};
