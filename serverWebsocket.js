const webSocket = require('socket.io');
const channelController = require('./controllers/channelController');


function conect(server) {
    const io = webSocket(server);

    io.on('connection', function(socket) {
        socket.on('sigin', (data) => {
            channelController.sigin(socket.id, data).then((result) => {
                socket.emit('sigin', result);
            });
        });

        socket.on('sigout', (data) => {
            channelController.sigout(socket.id, data).then((result) => {
                socket.emit('sigout', result);
            });
        });
    });
}

module.exports = {conect};