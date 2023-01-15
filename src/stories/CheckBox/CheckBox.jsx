import React, { useCallback, useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Icon } from "../../styles/global.styled";

import { CheckBoxWrapper, Container, Text } from "./CheckBox.styled";

const CheckBox: React.FC = ({ backgroundColor, title, ...rest }) => {
  const theme = useTheme();
  const [value, setValue] = useState(false)
  const handleSpace = (e) => {
    if (
      e.code === "Space" &&
      [...e.target.classList].includes(
        `checkBoxComponent${encodeURIComponent(title)}`
      )
    ) {
      e.preventDefault();
      rest.onClick(e);
    }
  };
  const handleKeyUp = useCallback(
    (event: any) => {
      handleSpace(event);
    },
    [handleSpace]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyUp);
    return () => {
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleKeyUp]);
  return (
    <Container
      className={`checkBoxComponent${encodeURIComponent(title)}`}
      color={backgroundColor}
      {...rest}
      onClick={() => setValue(prev => !prev)}
      role="checkbox"
      title={title}
      tabIndex={0}
    >
      <CheckBoxWrapper className={value ? "active" : ""}>
        <Icon
          visible={value}
          className="icon-success"
          color={theme.palette.Secondary60}
        />
      </CheckBoxWrapper>
      {title && <Text>{title}</Text>}
    </Container>
  );
};
export default CheckBox;
