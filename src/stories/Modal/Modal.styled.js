import styled, { keyframes } from "styled-components";
import Popup from "reactjs-popup";
import {
  Body,
  Heading5Large,
} from "../../styles/typography.styled";
export const StyledPopup = styled(Popup)`
  &-overlay {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const ModalContainer = styled.article`
  padding: 50px;
  background-color: ${({ theme }) => theme.palette.White};
  min-width: 300px;
  max-width: 450px;
  border-radius: 20px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;

export const ModalTitle = styled.p`
  ${Heading5Large("medium")}
  text-align: center;
  color: ${({ theme }) => theme.palette.Grey90};
`;

export const LoadingTitle = styled.p`
  ${Body("regular", "medium")}
  margin-bottom: 0;
  margin-top: 2rem;
  color: ${({ theme }) => theme.palette.Grey60};
`;

const showLoading = keyframes`
  from {
    opacity: 0;
    transform: scale(1.3);
  } to {
    opacity: 1;
    transform: scale(1.0);
  }
`;

export const LoadingContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation-name: ${showLoading};
  animation-duration: 1s;
  & img {
    width: 120px;
  }
  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    width: 500px;
    height: 500px;
    background: ${({ theme }) => theme.palette.Grey5};
    border-radius: 100%;
    filter: blur(50px);
  }
`;
