import React, { useCallback, useEffect, useState } from "react";
import { CriticalBar, GreenBar, InfoBar, Row, WarnBar } from "../../styles/global.styled";

const Bar = ({type, text}) => {
  return (
    <Row>
      <InfoBar minWidth="350px" visible={type === 'info'}>
        <span className="icon-Info" />
        <p>{text}</p>
      </InfoBar>
      <GreenBar minWidth="350px" visible={type === 'success'}>
        <span className="icon-Success" />
        <p>{text}</p>
      </GreenBar>
      <WarnBar minWidth="350px" visible={type === 'warning'}>
        <span className="icon-Error" />
        <p>{text}</p>
      </WarnBar>
      <CriticalBar minWidth="350px" visible={type === 'critical'}>
        <span className="icon-Error" />
        <p>{text}</p>
      </CriticalBar>
    </Row>
  );
};

export default Bar
