import React, { useEffect, useState } from "react";
import { CustomCreatable, CustomSelect } from "./Select.styled";

export const Select = ({ ...rest }) => {
  const [type, setType] = useState("default");
  const [active, setActive] = useState(false);

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

  const getSelect = () => {
    console.log(rest.type === "creatable");
    if (rest.type === "creatable")
      return (
        <CustomCreatable
          onFocus={activeHandler}
          onBlur={blurHandler}
          className={`${type}`}
          {...rest}
        />
      );
    return (
      <CustomSelect
        onFocus={activeHandler}
        onBlur={blurHandler}
        className={`${type}`}
        {...rest}
      />
    );
  };

  return getSelect();
};
