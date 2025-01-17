const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    users: {
        type: [String],
        required: true,
    },
}, {timestamps: true});

const Channel = mongoose.model('Channel', ChannelSchema);

module.exports = Channel;