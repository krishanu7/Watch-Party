let rooms = {}; // { users: [...{name, id, roomId}], videoURL: ''}
let userMap = {}; // maps socket id to rooms

const addRoom = (roomId, videoId) => {
  if (!rooms[roomId]) rooms[roomId] = { users: [], videoId };
};
const setVideoId = (roomId, videoId) => {
  if (rooms[roomId]) rooms[roomId]["videoId"] = videoId;
};
const getRoom = (roomId) => rooms[roomId];

const addUser = (roomId, name, userId) => {
  rooms[roomId]["userId"].push({ name, id: userId, roomId });
  userMap[userId] = roomId;
};
const removeUser = (userId) => {
  const roomId = userMap[userId];
  let _user = null;
  if (roomId) {
    const users = rooms[roomId]["users"];
    rooms[roomId]["users"] = users.filter((user) => {
      if (user.id === userId) {
        _user = user;
      }
      return user.id !== userId;
    });
    delete userMap[userId];
    removeRoom(roomId);
    return _user;
  }
  return null;
};

const removeRoom = (roomId) => {
  if (rooms[roomId]["users"].length === 0) delete rooms[roomId];
};
const getUserList = (roomId) => {
  const room = rooms[roomId];
  return room ? room["users"] : [];
};
const getUser = (userId) => {
  const roomId = userMap[userId];
  const users = getUserList(roomId);
  return users.find((user) => user.id === userId);
};
const showInfo = () => {
  const roomIds = Object.keys(rooms);
  roomIds.forEach((roomId) => {
    console.log(`Room: ${roomId}`);
    rooms[roomId]["users"].forEach((user) => console.log(user));
  });
};
module.exports = {
  addRoom,
  setVideoId,
  getRoom,
  addUser,
  removeUser,
  removeRoom,
  getUserList,
  getUser,
  showInfo,
};
