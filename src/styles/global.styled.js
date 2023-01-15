import styled, { css, createGlobalStyle } from "styled-components";
import { Body, Caption, Footer, Heading1Large, Heading1Small, Heading2Large, Heading2Small, Heading3Large, Heading3Small, Heading4Large, Heading4Small, Heading5Large, Heading5Small, Heading6Large, Heading6Small } from "./typography.styled";

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
    color: ${({ theme, color }) => color || theme.palette.Grey20};
    ${Body("regular", "large")};
    font-family: icomoon;
  }
`;


const getFontStyle = (
  type,
  weight,
  size,
) => {
  if (type === 'body') return Body(weight, size);
  if (type === 'caption')
    return Caption(weight, size);
  if (type === 'footer') return Footer(weight);

  if (type === 'h1' && size === 'large')
    return Heading1Large(weight === 'regular' ? undefined : weight);
  if (type === 'h1' && size === 'small')
    return Heading1Small(weight === 'regular' ? undefined : weight);

  if (type === 'h2' && size === 'large')
    return Heading2Large(weight === 'regular' ? undefined : weight);
  if (type === 'h2' && size === 'small')
    return Heading2Small(weight === 'regular' ? undefined : weight);

  if (type === 'h3' && size === 'large')
    return Heading3Large(weight === 'regular' ? undefined : weight);
  if (type === 'h3' && size === 'small')
    return Heading3Small(weight === 'regular' ? undefined : weight);

  if (type === 'h4' && size === 'large')
    return Heading4Large(weight === 'regular' ? undefined : weight);
  if (type === 'h4' && size === 'small')
    return Heading4Small(weight === 'regular' ? undefined : weight);

  if (type === 'h5' && size === 'large')
    return Heading5Large(weight === 'regular' ? undefined : weight);
  if (type === 'h5' && size === 'small')
    return Heading5Small(weight === 'regular' ? undefined : weight);

  if (type === 'h6' && size === 'large')
    return Heading6Large(weight === 'regular' ? undefined : weight);
  if (type === 'h6' && size === 'small')
    return Heading6Small(weight === 'regular' ? undefined : weight);

  return '';
};

export const Text = styled.p`
  ${({type, weight, size}) => (type ? getFontStyle(type, weight, size) : '')}
  display: ${({visible = true}) => (visible ? 'inital' : 'none')};
  white-space: ${({isNoWrap = false}) => (isNoWrap ? 'nowrap' : 'wrap')};
  text-transform: ${({textTransform}) => textTransform || 'none'};
  margin: ${({margin}) => margin || '0'};
  padding: ${({padding}) => padding || '0'};
  width: ${({width}) => width || 'unset'};
  color: ${({color, theme}) => color || theme.palette.Grey90};
  text-decoration: ${({textDecoration}) => textDecoration || 'none'};
  text-align: ${({textAlign}) => textAlign || 'left'};
  z-index: ${({zIndex}) => zIndex || 0};
  &::first-letter {
    text-transform: ${({isCapitalize = false}) =>
      isCapitalize ? 'capitalize' : 'none'};
  }
`;

export const InfoBar = styled(Row)`
  background-color: ${({theme}) => theme.palette.Secondary20};
  color: ${({theme}) => theme.palette.Grey70};
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  ${Body('regular', 'medium')}
  border-radius: 20px;
  & span::before {
    color: ${({theme}) => theme.palette.Secondary100};
    font-size: 30px;
  }
`;

export const WarnBar = styled(Row)`
  background-color: ${({theme}) => theme.palette.Yellow20};
  color: ${({theme}) => theme.palette.Grey70};
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  ${Body('regular', 'medium')}
  border-radius: 20px;
  & span::before {
    color: ${({theme}) => theme.palette.Yellow100};
    font-size: 30px;
  }
`;

export const CriticalBar = styled(Row)`
  background-color: ${({theme}) => theme.palette.Red20};
  color: ${({theme}) => theme.palette.Grey70};
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  ${Body('regular', 'medium')}
  border-radius: 20px;
  & span::before {
    color: ${({theme}) => theme.palette.Red100};
    font-size: 30px;
  }
`;

export const GreenBar = styled(Row)`
  background-color: ${({theme}) => theme.palette.Green20};
  color: ${({theme}) => theme.palette.Grey70};
  align-items: center;
  padding: 10px 20px;
  gap: 10px;
  ${Body('regular', 'medium')}
  border-radius: 20px;
  & span::before {
    color: ${({theme}) => theme.palette.Green100};
    font-size: 30px;
  }
`;

export const Standard = css`
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  width: ${({width}) => width || 'unset'};
  height: ${({height}) => height || '48px'};
  margin: ${({margin}) => margin || ''};
  padding: ${({padding}) => padding || ''};
  white-space: nowrap;
  transition: 0.2s;
  z-index: 0;
  position: relative;
  display: ${({visible = true}) => (visible ? 'block' : 'none')};
  ${Body('medium', 'large')};
  &:disabled {
    pointer-events: none;
  }
  &:focus-visible,
  &:focus {
    outline-color: transparent;
  }
`;

const Primary = css`
  color: ${({theme}) => theme.palette.White};
  background-color: ${({theme, isCTA}) =>
    isCTA ? theme.palette.Primary100 : theme.palette.Primary80};
  &:active {
    background-color: ${({theme}) => theme.palette.Primary90};
  }
  &:disabled {
    background-color: ${({theme}) => theme.palette.Primary60};
  }
  &:focus-visible {
    border: 1px solid ${({theme}) => theme.palette.White};
    &:before {
      content: '';
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({theme}) => theme.palette.Primary80};
    }
  }
  &:hover {
    box-shadow: 0px 3px 10px
      ${({theme}) => theme.palette.BackgroundTransparency10};
  }
`;

const Secondary = css`
  color: ${({theme}) => theme.palette.Secondary90};
  background-color: ${({theme}) => theme.palette.Secondary20};
  &:active {
    background-color: ${({theme}) => theme.palette.Secondary30};
    color: ${({theme}) => theme.palette.Secondary100};
  }
  &:disabled {
    background-color: ${({theme}) => theme.palette.Secondary10};
    background-color: ${({theme}) => theme.palette.Secondary60};
  }
  &:focus-visible {
    border: 1px solid ${({theme}) => theme.palette.White};
    &:before {
      content: '';
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({theme}) => theme.palette.Secondary60};
    }
  }
  &:hover {
    box-shadow: 0px 1px 5px
      ${({theme}) => theme.palette.BackgroundTransparency10};
  }
`;

const Ghost = css`
  color: ${({theme}) => theme.palette.Grey60};
  background-color: ${({theme}) => theme.palette.Grey5};
  &:active {
    background-color: ${({theme}) => theme.palette.Grey10};
    color: ${({theme}) => theme.palette.Grey80};
  }
  &:disabled {
    color: ${({theme}) => theme.palette.Grey40};
  }
  &:focus-visible {
    border: 1px solid ${({theme}) => theme.palette.White};
    &:before {
      content: '';
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({theme}) => theme.palette.White};
    }
  }
`;

const Critical = css`
  color: ${({theme}) => theme.palette.White};
  background-color: ${({theme}) => theme.palette.Red80};
  &:active {
    background-color: ${({theme}) => theme.palette.Red100};
  }
  &:disabled {
    color: ${({theme}) => theme.palette.Grey40};
  }
  &:focus-visible {
    border: 1px solid ${({theme}) => theme.palette.White};
    &:before {
      content: '';
      border-radius: 10px;
      position: absolute;
      z-index: -1;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      background-color: ${({theme}) => theme.palette.Red100};
    }
  }
`;

const getSpecificButton = (type) => {
  if (type === 'Primary') return Primary;
  if (type === 'Secondary') return Secondary;
  if (type === 'Ghost') return Ghost;
  return Critical;
};

export const Button = styled.button`
  ${Standard};
  ${({buttonType}) => getSpecificButton(buttonType)}
`;