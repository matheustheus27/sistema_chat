
const Message = require('../models/message');

async function send(data) {
    try {
        const message = new Message({
            sender: data.sender,
            receiver: data.receiver,
            dt_sent: new Date(),
            message: data.message
        });

        message.save();

        return {
            status: true,
            message: 'Successfully sent message',
            data: message
        };
    } catch(error) {
        return {
            status: false,
            message: 'Error sending message',
            error: {
                mesage: error.mesage,
                path: error.stack,
                type: error.name
            }
        }
    }
}

function list(data) {

}

module.exports = {send, list};