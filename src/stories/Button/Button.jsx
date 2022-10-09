import React from "react";
import {
  BtnGhost,
  BtnPrimary,
  BtnSecondary,
  IndicatorContainer,
  IndicatorWrapper,
  Text,
} from "./Button.styled";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  type,
  backgroundColor,
  size,
  label,
  margin,
  padding,
  width,
  height,
  fabType,
  fabIcon,
  fabText,
  fabSize,
  ...props
}) => {
  const checkTextIcon = () => {
    if (fabIcon) return <Text className={fabIcon} typeColor={fabType} />;
    return <Text typeColor={type}>{fabText}</Text>;
  };
  return (
    <>
      <BtnPrimary
        visible={type === "Primary"}
        padding={padding}
        margin={margin}
        height={height}
        width={width}
        type="button"
        {...props}
      >
        {label}
      </BtnPrimary>
      <BtnSecondary
        visible={type === "Secondary"}
        padding={padding}
        margin={margin}
        height={height}
        width={width}
        type="button"
        {...props}
      >
        {label}
      </BtnSecondary>
      <BtnGhost
        visible={type === "Ghost"}
        padding={padding}
        margin={margin}
        height={height}
        width={width}
        type="button"
        {...props}
      >
        {label}
      </BtnGhost>
      <IndicatorContainer size={fabSize || 50} visible={type === "Fab"}>
        <IndicatorWrapper
          isPressCursor={true}
          typeColor={fabType}
          size={(fabSize || 50) - 10}
          onClick={() => {}}
        >
          {checkTextIcon()}
        </IndicatorWrapper>
      </IndicatorContainer>
    </>
  );
};
