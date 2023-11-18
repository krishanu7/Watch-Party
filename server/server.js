const express = require('express');
const app = express();
const server = require('http').createServer(app);
const ioUtils = require('./utils/io')

const io = require('socket.io')(server,{
    path: '/socket',
    origin: ['http://localhost:3000'],
    serverClient: false,
})

const cors = require('cors');
app.use(cors({origin: 'http://localhost:3000'}));

const PORT = process.env.PORT ||8080;

app.get('/test', (req, res, next) => {
    res.send({message: "Hello World"});
});

ioUtils.setUpIO(io);

server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})