import React from "react";
import styled from "styled-components";
import { AiOutlineHeart } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { colors } from "../../config/colors";
const Footer = () => {
  return (
    <StyledFooter>
      <div style={{ display: "flex", alignItems: "center" }}>
        Crafted with&nbsp;
        <AiOutlineHeart
          style={{ color: colors.primaryColor, fontSize: "1.3em" }}
        ></AiOutlineHeart>
        &nbsp;by&nbsp;
        <a href="https://github.com/krishanu7" style={{color:"#BBE2EC"}}>Krishanu</a>
        {" "}&nbsp;Source Code&nbsp;{" "}
        <a href="https://github.com/krishanu7/watchparty">
          <BsGithub
            style={{
              fontSize: "1.3em",
              padding: "2px",
              marginTop: "2.5px",
              color: "white",
            }}
          ></BsGithub>
        </a>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  height: 45px;
  margin-top: -45px;
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  align-items: center;
  justify-content: center;
  font-size: 0.9em;
  font-weight: 500;
  background-color: black;
  color: white;
  font-style: italic;
  flex-wrap: wrap;
  padding: 0 5%;
  text-align: center;
`;

export default Footer;
