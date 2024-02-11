import React, { useEffect, useRef } from "react";
import styled from "styled-components";

const Messages = (props) => {
  const messageEnd = useRef(null);
  const messagesContainer = useRef(null);
  const { messages } = props;

  const scrollToBottom = () => {
    if (!messagesContainer.current || !messageEnd.current) return;
    messageEnd.current.scrollIntoView();
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <MessagesContainer ref={messagesContainer}>
      {messages && messages.map((message) => (
        <Message user={message.from} key={message.id}>
          {message.text}
        </Message>
      ))}
      <div className='dummy' ref={messageEnd}></div>
    </MessagesContainer>
  );
};

const Message = (props) => {
  const { user, children } = props;
  return user ? (
    <MessageContainer className={props.className}>
      <User>{user}</User>
      <Text>{children}</Text>
    </MessageContainer>
  ) : (
    <MessageContainer adminMessage className={props.className}>
      <Text adminMessage>{children}</Text>
    </MessageContainer>
  );
};
const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 5px;
  box-sizing: border-box;
  overflow-y: auto;
  overflow-x: auto;
`;
const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.9em;
  margin-bottom: 10px;
  box-sizing: border-box;
  ${({ adminMessage }) =>
    adminMessage && { "text-align": "center", color: "gray" }}
`;
const User = styled.div`
  font-weight: 500;
  font-size: 0.85em;
  margin-bottom: 3px;
  margin-left: 8px;
`;
const Text = styled.div`
  padding: 8px 10px;
  font-weight: 500;
  font-size: 0.9em;
  background-color: ${(props) => (props.adminMessage ? "transparent" : "#eee")};
  width: ${(props) => (props.adminMessage ? "auto" : "80%")};
  border-radius: 15px;
`;

export default Messages;
