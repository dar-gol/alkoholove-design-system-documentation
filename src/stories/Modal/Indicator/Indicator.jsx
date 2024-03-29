import React from "react";
import { IndicatorContainer, IndicatorWrapper, Text } from "./Indicator.styled";

const Indicator = ({
  size,
  onClick,
  icon,
  text,
  type,
  visible = true,
  isPressCursor = true,
  backgroundColor,
  ...position
}) => {
  const checkTextIcon = () => {
    if (icon) return <Text className={icon} typeColor={type} />;
    return <Text typeColor={type}>{text}</Text>;
  };

  return (
    <IndicatorContainer
      backgroundColor={backgroundColor}
      size={size}
      {...position}
      visible={visible}
    >
      <IndicatorWrapper
        isPressCursor={isPressCursor}
        typeColor={type}
        size={size - 10}
        onClick={onClick}
      >
        {checkTextIcon()}
      </IndicatorWrapper>
    </IndicatorContainer>
  );
};

export default Indicator;
