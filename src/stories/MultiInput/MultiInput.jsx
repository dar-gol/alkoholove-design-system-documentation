import React, { useEffect, useState } from "react";
import { Col, Row } from "../../styles/global.styled";
import { StyledMultiInput } from "./MultiInput.styled";

export const MultiInput = ({ title, ...rest }) => {
  const [type, setType] = useState("default");
  const [active, setActive] = useState(false);
  const [value, setValue] = useState([]);

  const activeHandler = () => setActive(true);
  const blurHandler = () => setActive(false);

  const stateHandler = () => {
    if (active) return "written active";
    if (!active && rest.value) return `written`;
    if (!active && !rest.value) return `default`;
    return "default";
  };

  useEffect(() => {
    setType(stateHandler());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rest.value, active]);

  return (
    <Col margin="0 0 20px 0" minHeight="56px">
      <StyledMultiInput
        onFocus={activeHandler}
        onBlur={blurHandler}
        className={`${type}`}
        placeholder={title}
        options={[]}
        isClearable
        isMulti
      />
    </Col>
  );
};
