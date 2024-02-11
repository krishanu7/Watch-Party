import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faShare, faUser } from '@fortawesome/free-solid-svg-icons';
import { colors } from "../../config/colors";

const Options = (props) => {
  return (
    <OptionsContainer>
      <OptionButton
        icon={faVideo}
        title="Change to another YouTube video"
        onClick={props.onVideoChange}
      >
        Change Video
      </OptionButton>
      <OptionButton
        icon={faShare}
        title="Invite friends to join this room"
        onClick={props.onInvite}
      >
        Invite Friends
      </OptionButton>
      <OptionButton
        icon={faUser}
        title="Allow only host to control the video"
        onClick={props.alertNotImplemented}
      >
        Host Only
      </OptionButton>
    </OptionsContainer>
  );
};
const OptionButton = ({ children, icon, ...props }) => {
  return (
    <StyledOptionButton {...props}>
      <FontAwesomeIcon icon={icon} style={{ fontSize: '1.8em', marginRight: '10px' }} />
      <span>{children}</span>
    </StyledOptionButton>
  );
};

const StyledOptionButton = styled.button`
  margin: 0;
  padding: 0 15px;
  background-color: ${colors.secondaryColor};
  color: ${colors.navbarColor};
  border-radius: 5px;
  border: 1px solid hsl(202.54deg 100% 73.3%);
  margin-right: 3px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  font-weight: 500;
  text-align: center;
  outline: none;
  border: none;
  font-family: inherit;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primaryColor};
    font-size: 0.7em;
  }

  &:last-child {
    margin-right: 0;
  }
`;
const OptionsContainer = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
  padding: 0px;
  box-shadow: 2px 2px 3px #eee;
  box-sizing: border-box;
  border-radius: 5px;
`;

export default Options;
