import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { Container, Row, Col } from "react-grid-system";
import Topbar from "../common/Topbar";
import Swal from "sweetalert2";
import Player from "./Player";
import Options from "./Options";
import Chat from "./Chat/Chat";
import { createConnection, bindSocketEvents } from "../../utills/socket";
import { Spinner } from "../common/Spinner";
import { getVideoId } from "../../utills/helper";
import { UserContext } from "../../context/UserContext";
import { SignalContext } from "../../context/SignalContext";

const Room = () => {
  const location = useLocation();
  const [isHost, setHost] = useState(false);
  const [roomLoading, setRoomLoading] = useState(true);
  const {
    dispatch: userDispatch,
    userData,
    socket,
    setSocket,
  } = useContext(UserContext);
  const { dispatch: signalDispatch } = useContext(SignalContext);

  const setupRoom = async () => {
    const state = location.state;
    const hostId = state?.hostId;
    const videoId = state?.videoId;
    let username = state?.username;

    if (!hostId) {
      // Not a host
      if (!username) {
        //Ask for Username
        const usernamePrompt = await Swal.fire({
          title: "Enter your display name",
          input: "text",
          allowOutsideClick: false,
        });
        username = usernamePrompt.value;
      }

      const roomId = location.pathname.split("/")[2];
      createConnection(username, roomId, null).then((_socket) => {
        setHost(false);
        setSocket(_socket);
        userDispatch({ type: "UPDATE_SOCKET", socket: _socket });
        //Update username in global Context
        userDispatch({ type: "UPDATE_USERNAME", username });
        bindSocketEvents(_socket, { userDispatch, signalDispatch });
        setRoomLoading(false);
      });
    } else {
      // Is a host
      const _isHost = true;
      const _socket = userData.socket;
      //Update videoid in global context
      userDispatch({ type: "UPDATE_VIDEO_ID", videoId });
      showInviteModal();
      setHost(_isHost);
      //Update username in global Context
      userDispatch({ type: "UPDATE_USERNAME", username });
      bindSocketEvents(_socket, { userDispatch, signalDispatch });
      setRoomLoading(false);
    }
    console.log(socket);
  };

  useEffect(() => {
    setupRoom();
  }, []);

  const showInviteModal = async () => {
    await Swal.fire({
      title: "Invite friends with this link",
      input: "text",
      inputValue: window.location.href,
      confirmButtonText: "Copy",
      inputAttributes: {
        readOnly: true,
      },
      width: "40%",
      onClose: () => {
        document.getElementsByClassName("swal2-input")[0].select();
        document.execCommand("copy");
      },
    });
  };

  return (
    <>
      <Topbar />
      <Container fluid style={{ margin: "0 3%" }}>
        <Row>
          <Col md={8} sm={12}>
            <Player socket={socket} videoId={userData.videoId} />
          </Col>
          <Col md={4} sm={12}>
            <Options />
            <Chat socket={socket} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Room;
