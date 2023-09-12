import React from "react";
import styled from "styled-components";
import { Row, Col, Hidden } from "react-grid-system";
import { colors } from "../../config/colors";
import { HiOutlineTv } from "react-icons/hi2";
import { IoSyncOutline } from "react-icons/io5";
import { BsChatLeftDots } from "react-icons/bs";

const iconComponents = {
  HiOutlineTv: HiOutlineTv,
  IoSyncOutline: IoSyncOutline,
  BsChatLeftDots: BsChatLeftDots,
};

const FeatureBox = () => {
  return (
    <Row style={{ marginTop: "80px" }}>
      <Hidden xs>
        <Col xs={2.1}></Col>
      </Hidden>
      <Col xs={12} md={2.6}>
        <Box icon="HiOutlineTv">Host Video in a room</Box>
      </Col>
      <Col xs={12} md={2.6}>
        <Box icon="IoSyncOutline">Sync video with each other</Box>
      </Col>
      <Col xs={12} md={2.6}>
        <Box icon="BsChatLeftDots">Live chat with friends</Box>
      </Col>
      <Hidden xs>
        <Col xs={2.1}></Col>
      </Hidden>
    </Row>
  );
};

const Box = (props) => {
  const IconComponent = iconComponents[props.icon];

  return (
    <StyledBox>
      <IconComponent
        style={{
          fontSize: "2em",
          color: colors.primaryColor,
        }}
      />
      <div>{props.children}</div>
    </StyledBox>
  );
};

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  height: 160px;
  margin: 5%;
  padding: 5%;
  border-radius: 10px;
  margin-bottom: 18px;
  font-size: 0.9em;
	font-weight: 525;
	box-sizing: border-box;
	box-shadow: 0px 1px 5px #DDD;
  background-color: #FFF5E4;
`;
export default FeatureBox;

