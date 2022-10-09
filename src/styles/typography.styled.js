import { css } from "styled-components";

// UTILS

const setFooterWeight = (weight) => {
  if (weight === "bold") return "500";
  if (weight === "medium") return "400";
  return "300";
};

const setCaptionSize = (size) => {
  if (size === "large") return "11px";
  return "10px";
};

const setCaptionWeight = (weight) => {
  if (weight === "bold") return "600";
  if (weight === "medium") return "500";
  return "400";
};

const setBodyWeight = (weight) => {
  if (weight === "bold") return "600";
  if (weight === "medium") return "500";
  return "400";
};

const setBodySize = (size) => {
  if (size === "large") return "16px";
  if (size === "medium") return "14px";
  return "12px";
};

const setHeadingWeight = (weight) => {
  if (weight === "bold") return "700";
  return "500";
};

// HEADING LARGE

export const Heading1Large = (weight = "bold") => css`
  font-size: 48px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  line-height: 56px;
  letter-spacing: 0.3px;
`;

export const Heading2Large = (weight = "bold") => css`
  font-size: 40px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  line-height: 48px;
  letter-spacing: 0.3px;
`;

export const Heading3Large = (weight = "bold") => css`
  font-size: 32px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  line-height: 40px;
  letter-spacing: 0.3px;
`;

export const Heading4Large = (weight = "bold") => css`
  font-size: 24px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  line-height: 32px;
  letter-spacing: 0.3px;
`;

export const Heading5Large = (weight = "bold") => css`
  font-size: 20px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  line-height: 24px;
  letter-spacing: 0.3px;
`;

export const Heading6Large = (weight = "bold") => css`
  font-size: 16px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  line-height: 20px;
  letter-spacing: 0.3px;
`;

// HEADING SMALL

export const Heading1Small = (weight = "bold") => css`
  font-size: 40px;
  line-height: 48px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  letter-spacing: 0.3px;
`;

export const Heading2Small = (weight = "bold") => css`
  font-size: 32px;
  line-height: 40px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  letter-spacing: 0.3px;
`;

export const Heading3Small = (weight = "bold") => css`
  font-size: 24px;
  line-height: 32px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  letter-spacing: 0.3px;
`;

export const Heading4Small = (weight = "bold") => css`
  font-size: 20px;
  line-height: 24px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  letter-spacing: 0.3px;
`;

export const Heading5Small = (weight = "bold") => css`
  font-size: 16px;
  line-height: 25px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  letter-spacing: 0.3px;
`;

export const Heading6Small = (weight = "bold") => css`
  font-size: 14px;
  line-height: 22px;
  font-family: Roboto;
  font-weight: ${setHeadingWeight(weight)};
  letter-spacing: 0.3px;
`;

// BODY

export const Body = (weight = "bold", size = "large") => css`
  font-size: ${setBodySize(size)};
  line-height: 22px;
  font-family: Roboto;
  font-weight: ${setBodyWeight(weight)};
  letter-spacing: 0.3px;
`;

// CAPTION

export const Caption = (weight = "bold", size = "large") => css`
  font-size: ${setCaptionSize(size)};
  line-height: 22px;
  font-family: Roboto;
  font-weight: ${setCaptionWeight(weight)};
  letter-spacing: 0.3px;
`;

// FOOTER

export const Footer = (weight) => css`
  font-size: 8px;
  line-height: 22px;
  font-family: Roboto;
  font-weight: ${setFooterWeight(weight)};
  letter-spacing: 0.3px;
`;

//------------

export const Heading1 = () => css`
  font-size: ${({ theme }) => theme.fontSize.s7}px;
  font-family: Roboto;
  color: ${({ theme }) => theme.palette.title};
  font-weight: ${({ theme }) => theme.weights.bold};
  letter-spacing: 0.3px;
`;

export const Heading2 = () => css`
  font-size: ${({ theme }) => theme.fontSize.s5}px;
  font-family: Roboto;
  color: ${({ theme }) => theme.palette.heading};
  font-weight: ${({ theme }) => theme.weights.bold};
  letter-spacing: 0.3px;
`;

export const Heading3 = () => css`
  font-size: ${({ theme }) => theme.fontSize.s4}px;
  font-family: Roboto;
  color: ${({ theme }) => theme.palette.heading};
  font-weight: ${({ theme }) => theme.weights.bold};
  letter-spacing: 0.3px;
`;

export const Heading4 = () => css`
  font-size: ${({ theme }) => theme.fontSize.s3}px;
  font-family: Roboto;
  color: ${({ theme }) => theme.palette.heading};
  font-weight: ${({ theme }) => theme.weights.bold};
  letter-spacing: 0.3px;
`;

export const Common = () => css`
  font-size: ${({ theme }) => theme.fontSize.s3}px;
  font-family: Roboto;
  color: ${({ theme }) => theme.palette.content};
  font-weight: ${({ theme }) => theme.weights.regular};
  letter-spacing: 0.3px;
`;

export const CommonSmall = () => css`
  font-size: ${({ theme }) => theme.fontSize.s2}px;
  font-family: Roboto;
  color: ${({ theme }) => theme.palette.content};
  font-weight: ${({ theme }) => theme.weights.regular};
  letter-spacing: 0.3px;
`;

export const Label = () => css`
  font-size: ${({ theme }) => theme.fontSize.s2}px;
  font-family: Roboto;
  color: ${({ theme }) => theme.palette.heading};
  font-weight: ${({ theme }) => theme.weights.medium};
  letter-spacing: 0.3px;
`;
