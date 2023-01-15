import React from "react";

import Modal from "./Modal";
import { Button, Col, InfoBar, Text } from "../../styles/global.styled";

export default {
  title: "Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: `
Modal służy do wyświetlania treści lub dodatkowych funkcjonalności w danym widoku.
Pomaga w utrzymaniu estetyki, ponieważ możemy mniej istotne elementy ukryć w modalu.
Może być również użyteczny do zastosowania, gdy chcemy, aby użytkownik wykonał jakąś czynność przed
wejściem do danego widoku.
        `,
      },
    },
  },
  argTypes: {
    children: {
      description:
        "Zawartośc znajdująca sie w modalu",
    },
    isOpen: {
      description:
        "Definiuje, wyświetlanie modala",
    },
    onClose: {
      description:
        "Funkcja, która ma sie wykonac przed zamknięciem",
    },
    isClosable: {
      description:
        "Definiuje możliwość zamknięcia modala",
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Modal {...args} />;

export const modal = Template.bind({});
modal.args = {
  isOpen: true,
  isClosable: true,
  onClose: () => {},
  children: (
    <Col gap="10px">
        <Col>
          <Text
            as="h4"
            type="h5"
            weight="bold"
            size="large"
            color="#282727">
            Zmiana hasła
          </Text>
        </Col>
        <InfoBar minWidth="350px">
          <span className="icon-Info" />
          <p>
            Wyślemy Ci mailowe instrukcje jak zmienić hasło. Wystarczy nacisnąć
            poniższy przycisk.
          </p>
        </InfoBar>
        <Button buttonType="Primary" onClick={() => {}}>Zmieniam hasło</Button>
      </Col>
  )
};
