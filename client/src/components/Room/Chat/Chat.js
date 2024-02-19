import React, { useContext, useState } from "react";
import styled from "styled-components";
import Messages from "./Messages";
import Participants from "./Participants";
import { UserContext } from "../../../context/UserContext";
import { Input } from "../../common/FormControls";
import Button from "../../common/Button";
import { colors } from "../../../config/colors";
import { FaPaperPlane } from "react-icons/fa";

const Chat = (props) => {
  const { socket } = props;
  const { userData } = useContext(UserContext);
  const [message, setMessage] = useState("");

  const onMessageSend = (e) => {
    e.preventDefault();
    socket.emit("createMessage", message);
    setMessage("");
  };

  return (
    <ChatContainer>
      <Participants users={userData.userList} />
      <Messages messages={userData.messages} />
      <MessageSend onSubmit={onMessageSend}>
        <Input
          type="text"
          placeholder="Send a message!"
          style={{ fontsize: "0.8em", fontweight: 500 }}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          required
        />
        <Button
          type="submit"
          style={{
            minWidth: 0,
            padding: "0 10px",
            backgroundColor: colors.secondaryColor,
            border: "1px solid hsl(202.54deg 100% 73.3%)",
          }}
        >
          <FaPaperPlane />
        </Button>
      </MessageSend>
    </ChatContainer>
  );
};
const ChatContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  height: 465px;
  margin-top: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  box-shadow: 3px 3px 5px #eee;
  padding: 10px;
  box-sizing: border-box;
`;

const MessageSend = styled.form`
  display: flex;
  flex-direction: row;
`;

export default Chat;
