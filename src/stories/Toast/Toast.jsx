import React from "react";
import { Col, Icon, Row, Text } from "../../styles/global.styled";
import { ExitWrapper, ToastContainer } from "./Toast.styled";
import { useTheme } from "styled-components";

const Bar = ({type, text, title}) => {
  const theme = useTheme();
  const getIcon = () => {
    if(type === 'info') return 'icon-Info';
    if(type === 'success') return 'icon-Success';
    if(type === 'critical') return 'icon-Error';
    if(type === 'warning') return 'icon-Error';
  }
  const getColor = () => {
    if (type === 'critical') return theme.palette.Red100;
    if (type === 'info') return theme.palette.Secondary100;
    if (type === 'success') return theme.palette.Green100;
    if (type === 'warning') return theme.palette.Yellow100;
    return theme.palette.Grey100;
  };
  const getBackgroundColor = () => {
    if (type === 'critical') return theme.palette.Red10;
    if (type === 'info') return theme.palette.Secondary10;
    if (type === 'success') return theme.palette.Green10;
    if (type === 'warning') return theme.palette.Yellow10;
    return theme.palette.Grey10;
  };
  return (
    <ToastContainer backgroundColor={getBackgroundColor()}>
      <Row gap="10px">
        <Row>
          <Icon className={getIcon()} color={getColor()} fontSize="30px" />
        </Row>
        <Col flex="1">
          <Text
            as="h5"
            type="h5"
            weight="bold"
            size="large"
            color={theme.palette.Grey80}>
            {title}
          </Text>
          <Text
            as="p"
            type="body"
            weight="regular"
            size="medium"
            color={theme.palette.Grey70}>
            {text}
          </Text>
        </Col>
        <ExitWrapper onClick={() => {}}>
          <Icon
            cursor="pointer"
            className="icon-Exit"
            color={theme.palette.Grey100}
            fontSize="8px"
          />
        </ExitWrapper>
      </Row>
    </ToastContainer>
  );
};

export default Bar
