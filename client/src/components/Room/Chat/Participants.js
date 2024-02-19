import styled from "styled-components";

const Participants = (props) => {
  const {users} = props;
  console.log(users);
  return (
    <>
      <strong>Participants</strong>
      <ParticipantInfo>
        {users.map((user) => {
          <Box key={user.id}>{user.name}</Box>;
        })}
      </ParticipantInfo>
      <div
        style={{ height: "1px", backgroundColor: "#eee", margin: "12px 0" }}
      ></div>
    </>
  );
};
const ParticipantInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 6px;
`;
const Box = styled.div`
  box-sizing: border-box;
  padding: 3px 20px;
  border: 1.5px solid orange;
  text-align: center;
  font-weight: 500;
  margin-right: 5px;
  margin-bottom: 5px;
  border-radius: 10px;
  font-size: 0.7em;
`;
export default Participants;
