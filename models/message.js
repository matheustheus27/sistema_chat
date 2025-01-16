const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    sender: String,
    receiver: String,
    dt_sent: {type: Date, default: Date.now},
    message: String
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;