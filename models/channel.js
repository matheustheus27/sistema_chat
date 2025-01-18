const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    name: String,
    description: String,
    usersId: {
        type: [String],
        required: true,
    },
    isPrivate: Boolean
}, {timestamps: true});

const Channel = mongoose.model('Channel', ChannelSchema);

module.exports = Channel;