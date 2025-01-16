const webSocket = require('socket.io');


function conect(server) {
    const io = webSocket(server);
}