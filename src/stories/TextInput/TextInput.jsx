import React, { useEffect, useState } from "react";
import { Icon, Row } from "../../styles/global.styled";
import {
  Error,
  Input,
  InputContainer,
  InputWrapper,
  Label,
  TextArea,
} from "./TextInput.styled";

export const TextInput = ({ placeholder, error, state, icon, ...rest }) => {
  const [type, setType] = useState("default");
  const [rightIcon, setRightIcon] = useState("");
  const [active, setActive] = useState(false);
  const [value, setValue] = useState("");

  const activeHandler = () => setActive(true);
  const blurHandler = () => setActive(false);

  const stateRightIcon = () => {
    if (!active && state === "success") return "icon-Success";
    if (!active && state === "error") return "icon-Error";
    return "";
  };

  const stateHandler = () => {
    if (active) return "written active";
    if (!active && value) return `written ${state}`;
    if (!active && !value) return `default ${state}`;
    return "default";
  };

  useEffect(() => {
    setType(stateHandler());
    setRightIcon(stateRightIcon());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, value, active]);

  const textAreaAdjust = (event) => {
    const element = event.currentTarget;
    const parent = element.parentElement?.parentElement;
    element.style.height = "1px";
    element.style.height = `${35 + element.scrollHeight}px`;
    if (parent) {
      parent.style.minHeight = element.style.height;
      const grandParent = parent.parentElement;
      if (grandParent) {
        grandParent.style.minHeight = element.style.height;
      }
    }
  };

  const getPlaceholder = () => (active ? placeholder : "");

  const getInputType = () => {
    if (rest.type === "textarea")
      return (
        <TextArea
          {...rest}
          onChange={(e) => setValue(e.target.value)}
          placeholder={getPlaceholder()}
          onKeyUp={(event) => textAreaAdjust(event)}
        />
      );
    return (
      <Input
        {...rest}
        onChange={(e) => setValue(e.target.value)}
        placeholder={getPlaceholder()}
      />
    );
  };

  return (
    <Row width="300px">
      <InputContainer
        onFocus={activeHandler}
        onBlur={blurHandler}
        className={`${type}`}
      >
        <Icon className={`${icon || "icon-search"} left-icon`} />
        <InputWrapper>
          <Label>{rest.title}</Label>
          {getInputType()}
        </InputWrapper>
        <Icon className={`${rightIcon} right-icon`} />
        <Error className="error">{error}</Error>
      </InputContainer>
    </Row>
  );
};
