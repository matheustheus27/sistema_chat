const Message = require('../models/message');

async function send(data) {
    try {
        const message = new Message({
            sender: data.sender,
            receiver: data.receiver,
            dt_sent: new Date(),
            message: data.message
        });

        await message.save();

        return {
            status: true,
            message: 'Successfully sent message',
            data: {
                sender: data.sender,
                receiver: data.receiver,
                dt_sent: formatDate(message.dt_sent),
                message: data.message
            }
        };
    } catch(error) {
        return {
            status: false,
            message: 'Error sending message',
            error: {
                message: error.message,
                path: error.stack,
                type: error.name
            }
        }
    }
}

async function list(data) {
    try {
        const messages = await Message.aggregate([
            {$match: {receiver: data.receiver}},
            {$sort: {dt_sent: 1}},
            {
                $project: {
                    sender: 1,
                    receiver: 1,
                    dt_sent: {
                        $dateToString: {
                            format: "%d/%m/%Y às %H:%M",
                            date: "$dt_sent",
                            timezone: "America/Sao_Paulo"
                        }
                    },
                    message: 1,
                }
            }
        ]);

        return {
            status: true,
            message: 'Successfully listed messages',
            data: messages
        };

    } catch(error) {
        return {
            status: false,
            message: 'Error listing messages',
            error: {
                message: error.message,
                path: error.stack,
                type: error.name
            }
        }
    }
}

function formatDate(date) {
    return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }) + ` às ${date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
}

module.exports = {send, list};