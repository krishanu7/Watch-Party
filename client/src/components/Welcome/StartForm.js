import React, { useState } from "react";
import { Col } from "react-grid-system";
import { Card, Input, Label} from "../common";
import Button from "../common/Button"
import styled from "styled-components";

const CustomForm = (props) => {
  const { onSubmit, buttonName, header, loading } = props;
  return (
    <form onSubmit={onSubmit}>
      <Card padding="20px" width="320px">
        <Header>{header}</Header>
        {props.children}
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            style={{ alignSelf: "center", marginTop: "30px" }}
            secondary
            isLoading={loading}
            disabled={loading}
          >
            {buttonName}
          </Button>
        </div>
      </Card>
    </form>
  );
};
const Forms = (props) => {
  const [hostName, setHostName] = useState("");
  const [videoURl, setVideoURL] = useState("");
  const [joinName, setJoinName] = useState("");
  const [joinURL, setJoinURL] = useState("");

  const _onHost = (e) => {
    e.preventDefault();
    props.onHost(hostName, videoURl);
  };
  const _onJoin = (e) => {
    e.preventDefault();
    props.onJoin(joinName, joinURL);
  };
  return (
    <>
      <Col md={3}>
        <CustomForm
          buttonName="Host"
          header="Start a Party!"
          onSubmit={_onHost}
          loading={props.hostLoading}
        >
          <Controls>
            <Label htmlFor="username1">Your Name</Label>
            <Input
              type="text"
              name="username1"
              value={hostName}
              onChange={(e) => setHostName(e.target.value)}
              id="name1"
              placeholder="John is The Host"
              required
            />
          </Controls>
          <Controls>
            <Label htmlFor="url">Youtube URL</Label>
            <Input
              type="text"
              name="url"
              value={videoURl}
              onChange={(e) => setVideoURL(e.target.value)}
              id="url"
              placeholder="https://www.youtube.com/watch?v=bz5q5gl2uZA&ab_channel=Musictag"
              required
            />
          </Controls>
        </CustomForm>
      </Col>
      <Col md={2} align="center">
        <BigHeader>...OR...</BigHeader>
      </Col>
      <Col md={3}>
        <CustomForm
          buttonName="Join"
          header="Join existing Party!"
          onSubmit={_onJoin}
          loading={props.loading}
        >
          <Controls>
            <Label htmlFor="username2">Your Name</Label>
            <Input
              type="text"
              name="username2"
              value={joinName}
              onChange={(e) => setJoinName(e.target.value)}
              id="name2"
              placeholder="John Doe"
              required
            />
          </Controls>
          <Controls>
            <Label htmlFor="url">Join URL</Label>
            <Input
              type="text"
              name="url"
              value={joinURL}
              id="url"
              onChange={(e) => setJoinURL(e.target.value)}
              placeholder="watchparty.netlify.app/room/asD2123f"
              required
            />
          </Controls>
        </CustomForm>
      </Col>
    </>
  );
};
const Header = styled.h1`
  font-weight: 500;
  margin-bottom: 50px;
  font-size: 2em;
  text-align: center;
`;
const Controls = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 15px 0;
`;
const BigHeader = styled.h1`
  font-weight: 300;
  font-size: 2.8em;
`;
export default Forms;
