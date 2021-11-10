import express from 'express';

// express application
const app = express();
// http server
const server = require('http').Server(app);
// socket io server
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;

app.use('/scripts', express.static(__dirname + '/node_modules/socket.io/client-dist/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

server.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
