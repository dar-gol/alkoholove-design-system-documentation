import React from "react";

import Bar from "./Bar";

export default {
  title: "Belka tekstowa",
  component: Bar,
  parameters: {
    docs: {
      description: {
        component: `
Belka tekstowa służy do uwidocznienia ważnego tekstu. Są różne typy belek w zależności
od kontekstu. 

        `,
      },
    },
  },
  argTypes: {
    text: {
      description:
        "Text zawarty w belce",
    },
    type: {
      description:
        "Typ belki tekstowej.",
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
const Template = (args) => <Bar {...args} />;

export const bar = Template.bind({});
bar.args = {
  text: 'Tekst zawarty w belce tekstowej',
  type: 'info'
};
