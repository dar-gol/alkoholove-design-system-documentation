import styled, { css, createGlobalStyle } from "styled-components";
import { Body } from "./typography.styled";

export const Div = styled.section`
  flex: ${({ flex }) => flex || 0};
  align-items: ${({ alignItems }) => alignItems || "stretch"};
  justify-content: ${({ justifyContent }) => justifyContent || "flex-start"};
  margin: ${({ margin }) => margin || 0};
  padding: ${({ padding }) => padding || 0};
  position: ${({ position }) => position || "static"};
  flex-wrap: ${({ flexWrap }) => flexWrap || "nowrap"};
  gap: ${({ gap }) => gap || 0};
  width: ${({ width }) => width || "unset"};
  height: ${({ height }) => height || "unset"};
  min-width: ${({ minWidth }) => minWidth || "unset"};
  min-height: ${({ minHeight }) => minHeight || "unset"};
  max-width: ${({ maxWidth }) => maxWidth || "unset"};
  max-height: ${({ maxHeight }) => maxHeight || "unset"};
  display: ${({ visible = true }) => (visible ? "flex" : "none")};
`;

export const Row = styled(Div)``;

export const Col = styled(Div)`
  flex-direction: column;
`;

export const Icon = styled.span`
  &:before {
    color: ${({ theme }) => theme.palette.Grey20};
    ${Body("regular", "large")};
    font-family: icomoon;
  }
`;
