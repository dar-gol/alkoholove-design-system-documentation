import styled from "styled-components";

export const ToastContainer = styled.section`
  min-height: 80px;
  max-width: 350px;

  padding: 10px;
  border-radius: 20px;
  background-color: ${({backgroundColor}) => backgroundColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`

export const ExitWrapper = styled.div`
  background-color: ${({theme}) => theme.palette.White};
  width: 15px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
`