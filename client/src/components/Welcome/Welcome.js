import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container, Row, Col, Hidden } from "react-grid-system";
import Topbar from "../common/Topbar";
import Form from "./StartForm";
import { colors } from "../../config/colors";
import Button from "../common/Button";
import FeatureBox from "./FeatureBox";
import { getVideoId } from "../../utills/helper";
import { createConnection } from "../../utills/socket";
import { UserContext } from "../../context/UserContext";

const Welcome = (props) => {
  let isEnd = useRef(null);
  const navigate = useNavigate();
  const [hostLoading, setHostLoading] = useState(false);
  const { dispatch } = useContext(UserContext);

  const scrollToBottom = () => {
    if (isEnd && isEnd.current) {
      isEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onHost = async (username, videoURL) => {
    // used socket.id as room address
    setHostLoading(true);
    const videoId = getVideoId(videoURL);
    const _socket = await createConnection(username, null, videoId);
    setHostLoading(false);
    dispatch({ type: 'UPDATE_SOCKET', socket: _socket });
    navigate(`/room/${_socket.id}`, {
      state: { hostId: _socket.id, username, videoId },
    });
  };

  const onJoin = async (username, joinURL) => {
    //TODO : Add verification for join url set password like thing
    const splitURL = joinURL.split("/");
    const roomId = splitURL[splitURL.length - 1];
    navigate(`/room/${roomId}`, {
      state: { username },
    });
  };

  return (
    <>
      <Topbar />
      <Container fluid>
        <Row style={{ paddingTop: "80px" }} align="center">
          <Hidden xs>
            <Col xs={2}></Col>
          </Hidden>
          {/* --------- Intro Message -------- */}
          <Col xs={12} md={4}>
            <IntroMessage>
              Host <span style={{ color: colors.primaryColor }}>Youtube </span>
              Watch Party with Friends
            </IntroMessage>
            <Button
              style={styles.heroButton}
              onClick={scrollToBottom}
              primary="true"
            >
              {" "}
              Get Started
            </Button>
          </Col>
          <Col xs={12} md={5}>
            <img src="hero-banner.svg" alt="logo" />
          </Col>
          <Hidden xs>
            <Col xs={2}></Col>
          </Hidden>
        </Row>
      </Container>
      <FeatureBox />
      <Container fluid>
        <Row align="center" style={styles.formContainer}>
          <Col xs={12} md={2}></Col>
          <Form onHost={onHost} onJoin={onJoin} hostLoading={hostLoading} />
          <Col xs={12} md={2}></Col>
          <div className="dummy" ref={isEnd}></div>
        </Row>
      </Container>
    </>
  );
};

const IntroMessage = styled.h1`
  font-weight: 500;
  margin: 0;
  padding: 0;
  font-size: 2.5em;
`;
const styles = {
  heroButton: {
    margin: "15px 0",
    minWidth: "200px",
    padding: "15px 10px",
  },
  formContainer: {
    backgroundImage: "linear-gradient(#f9f9f9, #fff)",
    marginBottom: "40px",
    zIndex: 10,
    minHeight: "100vh",
  },
};
export default Welcome;
