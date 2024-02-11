import React from "react";
import Topbar from "../common/Topbar";
import Swal from "sweetalert2";
import Player from "./Player";
import Options from "./Options";
import Chat from "./Chat/Chat";
import { getVideoId } from "../../utills/helper";
import { UserContext } from "../../context/UserContext";
import { SignalContext } from "../../context/SignalContext";
import { Container, Row, Col } from "react-grid-system";
const Room = () => {
    
  return (
    <>
      <Topbar />
      <Container fluid style={{ margin: "0 3%" }}>
        <Row>
          <Col md={8} sm={12}>
            <Player />
          </Col>
          <Col md={4} sm={12}>
            <Options />
            <Chat />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Room;
