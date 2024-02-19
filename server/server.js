const express = require("express");
const app = express();
const server = require("http").createServer(app);
const PORT = process.env.PORT || 8080;
const ioUtils = require("./utils/io");

const io = require('socket.io')(server, {
  cors: {
    origin: ["http://localhost:3000", "https://www.youtube.com"],
    methods: ["GET", "POST"]
  },
  path: "/socket",
});

ioUtils.setupIO(io);

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
