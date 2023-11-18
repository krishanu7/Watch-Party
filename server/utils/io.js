const Rooms = require("./Room");
const { generateServerMessage, generateUserMessage } = require("../utils/message");


const setUpIO = (io) => {
  io.on("connection", (socket) => {
    console.log(`User connected : ${socket.id}`);

    socket.on("join", (data) => {
      console.log(`Joining user ${data}`);
      const { roomId, name, userId, videoId } = data;
      console.log(`User ${name} just joined in room ${roomId}`);

      socket.join(roomId);
      Rooms.addRoom(roomId, videoId);
      Rooms.addUser(roomId, name, userId); //userId = socketId
      //Rooms.showInfo();
      //Emit to all except the joined user
      socket.broadcast
        .to(roomId)
        .emit(
          "newMessage",
          generateServerMessage("userJoin", { roomId, name, userId })
        );
      //tell everyone in the room to update their userList
      io.to(roomId).emit("updateUserList", getUserList(roomId));
      //if the user joined existing room, tell him about the playing video
      if (!videoId) {
        const room = Rooms.getRoom(roomId);
        socket.emit(
          "newMessage",
          generateServerMessage("changeVideo", { videoId: room.videoId })
        );
      }
    });
    socket.on('createMessage', (message) => {
        const user = Rooms.getUser(socket.id);
        if(user) {
          io.to(user.roomId).emit(
            'newMessage',  generateUserMessage(user.name, user.id, message)
          );
          console.log("new message received", message);
        }
    });
    socket.on('disconnect', () => {
      const user = Rooms.removeUser(socket.id);
      console.log(`${user.name} has left the room`);

      io.to(user.roomId).emit(
        'newMessage', generateServerMessage('userLeft', {name: user.name, userId:user.id, roomId: user.roomId})
      )
      io.to(user.roomId).emit(
        'updateUserList', Rooms.getUserList(user.roomId)
      )
    })
  });
};
module.exports = {setUpIO};
