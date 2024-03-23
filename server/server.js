const express = require("express");
const cors = require("cors");
const app = express();
const server = require("http").createServer(app);
const ioUtils = require("./utils/io");

app.use(cors({
  origin: "https://watchtogether-live.netlify.app"
}));

const io = require("socket.io")(server, {
  path: "/socket",
  serveClient: false,
});

const PORT = process.env.PORT || 8080;

ioUtils.setupIO(io);

server.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
