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
  const [socket, setSocket] = useState(null);
  const [roomLoading, setRoomLoading] = useState(true);
  const { dispatch: userDispatch, userData } = useContext(UserContext);
  const { dispatch: signalDispatch } = useContext(SignalContext);
  let _isHost = false;
  let _socket = null;

  const setupRoom = async () => {
    const hostId = location.state?.hostId;
    const videoId = location.state?.videoId;
    let username = location.state?.username;

    if (!hostId) {
      // Not a host
      _isHost = false;
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
      _socket = await createConnection(username, roomId, null);
    } else {
      // Is a host
      _isHost = true;
      _socket = userData.socket;
      userDispatch({ type: "UPDATE_VIDEO_ID", videoId });
      showInviteModal();
    }
    userDispatch({ type: "UPDATE_USERNAME", username });
    setHost(_isHost);
    setSocket(_socket);
    bindSocketEvents(_socket, { userDispatch, signalDispatch });
    setRoomLoading(false);
    console.log("HI");
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
      willClose: () => {
        document.getElementsByClassName("swal2-input")[0].select();
        document.execCommand("copy");
      },
    });
  };

  const askVideoUrl = async () => {
    const { video: url } = await Swal.fire({
      title: "Youtube Video URL",
      input: "url",
      inputPlaceholder: "https://www.youtube.com/watch?v=BTYAsjAVa3I",
    });
    return url;
  };

  const onVideoChange = async () => {
    const newUrl = await askVideoUrl();
    if (newUrl && socket) {
      console.log(_socket);
      const videoId = getVideoId(newUrl);
      socket.emit("changeVideo", { videoId });
    }
  };

  const alertNotImplemented = async () => {
    await Swal.fire({
      title: "oops..",
      text: "Not implemented",
      icon: "error",
    });
  };

  return (
    <>
      <Topbar />
      {roomLoading ? (
        <Spinner />
      ) : (
        <Container fluid style={{ margin: "0 3%" }}>
          <Row>
            <Col md={8} sm={12}>
              <Player socket={socket} videoId={userData.videoId} />
            </Col>
            <Col md={4} sm={12}>
              <Options
                onInvite={showInviteModal}
                alertNotImplemented={alertNotImplemented}
                onVideoChange={onVideoChange}
              />
              <Chat socket={socket} />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default Room;
