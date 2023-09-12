import React from "react";
import styled from "styled-components";
import {Row, Col} from 'react-grid-system';
import { colors } from "../../config/colors";

const Topbar = () => {
  return (
    <Row>
      <Col>
        <StyledBar>
          <img
            src="/watchparty-logo.svg"
            alt="logo"
            width="auto"
            height="25px"
            style={{ marginRight: "8px" }}
          ></img>
          <span style={{ color: colors.primaryColor }}>WATCH</span>
          &nbsp;PARTY
        </StyledBar>
      </Col>
    </Row>
  );
};
const StyledBar = styled.div`
    display: flex;
    height: 8vh;
    box-shadow: 2px 2px 10px #ddd;
    align-items: center;
	justify-content: center;
    font-size: 1.8em;
	font-weight: 800;
`;
export default Topbar;
