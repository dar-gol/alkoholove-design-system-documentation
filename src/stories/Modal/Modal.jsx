import React from 'react';
import {useTheme} from 'styled-components';
import Indicator from './Indicator/Indicator';
import {ModalContainer, StyledPopup} from './Modal.styled';

const Modal = ({children, isOpen, onClose, isClosable}) => {
  const theme = useTheme();
  return (
    <StyledPopup
      open={isOpen}
      onClose={onClose}
      modal
      nested
      closeOnDocumentClick={isClosable}
      closeOnEscape={isClosable}>
      <Indicator
        visible={isClosable}
        size={40}
        backgroundColor={theme.palette.White}
        top="10px"
        right="10px"
        icon="icon-Exit"
        onClick={onClose}
        type="secondary"
      />
      <ModalContainer>{children}</ModalContainer>
    </StyledPopup>
  );
};

Modal.defaultProps = {
  isClosable: true,
};

export default Modal;
