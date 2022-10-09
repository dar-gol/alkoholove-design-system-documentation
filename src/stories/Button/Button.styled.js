import styled, { css, createGlobalStyle } from "styled-components";
import { Body } from "../../styles/typography.styled";

const Btn = css`
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  display: ${({ visible = true }) => (visible ? "block" : "none")};
  width: ${({ width }) => width || "unset"};
  height: ${({ height }) => height || "40px"};
  margin: ${({ margin }) => margin || ""};
  padding: ${({ padding }) => padding || ""};
  white-space: nowrap;
  transition: 0.2s;
  z-index: 0;
  position: relative;
  ${Body("medium", "large")};
  &:disabled {
    pointer-events: none;
  }
  &:focus-visible,
  &:focus {
    outline-color: transparent;
  }
`;

export const BtnPrimary = styled.button`
  ${Btn}
  color: ${({ theme }) => theme.palette.White};
  background-color: ${({ theme }) => theme.palette.Primary80};
  &:active {
    background-color: ${({ theme }) => theme.palette.Primary90};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.palette.Primary60};
  }
  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.palette.White};
    &:before {
      content: "";
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({ theme }) => theme.palette.Primary80};
    }
  }
  &:hover {
    box-shadow: 0px 3px 10px
      ${({ theme }) => theme.palette.BackgroundTransparency10};
  }
`;

export const BtnSecondary = styled.button`
  ${Btn}
  color: ${({ theme }) => theme.palette.Secondary90};
  background-color: ${({ theme }) => theme.palette.Secondary20};
  &:active {
    background-color: ${({ theme }) => theme.palette.Secondary30};
    color: ${({ theme }) => theme.palette.Secondary100};
  }
  &:disabled {
    background-color: ${({ theme }) => theme.palette.Secondary10};
    background-color: ${({ theme }) => theme.palette.Secondary60};
  }
  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.palette.White};
    &:before {
      content: "";
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({ theme }) => theme.palette.Secondary60};
    }
  }
  &:hover {
    box-shadow: 0px 1px 5px
      ${({ theme }) => theme.palette.BackgroundTransparency10};
  }
`;

export const BtnGhost = styled.button`
  ${Btn}
  color: ${({ theme }) => theme.palette.Grey60};
  background-color: ${({ theme }) => theme.palette.Grey5};
  &:active {
    background-color: ${({ theme }) => theme.palette.Grey10};
    color: ${({ theme }) => theme.palette.Grey80};
  }
  &:disabled {
    color: ${({ theme }) => theme.palette.Grey40};
  }
  &:focus-visible {
    border: 1px solid ${({ theme }) => theme.palette.White};
    &:before {
      content: "";
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({ theme }) => theme.palette.White};
    }
  }
  &:hover {
    box-shadow: 0px 1px 5px
      ${({ theme }) => theme.palette.BackgroundTransparency10};
  }
`;

const setColor = (type, theme) => {
  if (type === "primary")
    return {
      textColor: theme.palette.Primary80,
      groundColor: theme.palette.Primary20,
    };
  if (type === "secondary")
    return {
      textColor: theme.palette.Secondary80,
      groundColor: theme.palette.Secondary20,
    };
  if (type === "red")
    return {
      textColor: theme.palette.Red80,
      groundColor: theme.palette.Red20,
    };
  if (type === "green")
    return {
      textColor: theme.palette.Green80,
      groundColor: theme.palette.Green20,
    };
  return {
    textColor: theme.palette.Secondary80,
    groundColor: theme.palette.Secondary20,
  };
};

export const IndicatorContainer = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  position: relative;
  top: ${({ top }) => top || "auto"};
  left: ${({ left }) => left || "auto"};
  bottom: ${({ bottom }) => bottom || "auto"};
  right: ${({ right }) => right || "auto"};
  justify-content: center;
  display: ${({ visible }) => (visible ? "flex" : "none")};
  align-items: center;
  border-radius: 100%;
  background: ${({ theme }) => theme.palette.Grey5};
  z-index: 2;
`;

export const Text = styled.span`
  color: ${({ typeColor, theme }) => setColor(typeColor, theme).textColor};
  ${Body("medium", "small")}
  line-height: 12px;
  &:before {
    color: ${({ typeColor, theme }) => setColor(typeColor, theme).textColor};
    ${Body("medium", "small")}
    font-family: icomoon;
    line-height: 12px;
  }
`;

export const IndicatorWrapper = styled.button`
  padding: 0 !important;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: 100%;
  border: none;
  background-color: ${({ typeColor, theme }) =>
    setColor(typeColor, theme).groundColor};
  cursor: ${({ isPressCursor }) => (isPressCursor ? "pointer" : "default")};
`;
