import React, { useCallback, useEffect, useState } from "react";
import { Row } from "../../styles/global.styled";
import {
  CheckBoxContainer,
  Container,
  Icon,
  IconWrapper,
  Indicator,
  Text,
} from "./Toggle.styled";

const Toggle = ({
  leftIcon,
  rightIcon,
  leftColor,
  rightColor,
  backgroundColor,
  title,
  ...rest
}) => {
  const [value, setValue] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    (event) => {
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
    <Row>
      <Container
        className={`checkBoxComponent${encodeURIComponent(title)}`}
        color={backgroundColor}
        {...rest}
        onClick={() => setValue((prev) => !prev)}
        role="checkbox"
        title={title}
        tabIndex={0}
      >
        <CheckBoxContainer
          className={value ? "active" : ""}
          height="40px"
          width="74px"
        >
          <Indicator color={value ? rightColor : leftColor}>
            <Icon className={value ? rightIcon || "" : leftIcon || ""} />
          </Indicator>
          <IconWrapper>
            <Icon className={leftIcon || ""} />
          </IconWrapper>
          <IconWrapper>
            <Icon className={rightIcon || ""} />
          </IconWrapper>
        </CheckBoxContainer>
        {title && <Text>{title}</Text>}
      </Container>
    </Row>
  );
};

export default Toggle
