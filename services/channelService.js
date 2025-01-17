const Channel = require('../models/channel');

async function sigin(socketId, data) {
    try {
        const channels = await Channel.distinct('id', {users: data.userId});

        return {
            status: true,
            message: 'Successfully connected!'
        };
    } catch(error) {
        return {
            status: true,
            message: 'Error when connecting!'
        };
    }
}

async function sigout(socketId, data) {
    try {
        const channels = await Channel.distinct('id', {users: data.userId});

        return {
            status: true,
            message: 'Successfully disconnected!'
        };
    } catch(error) {
        return {
            status: true,
            message: 'Error when disconnecting!'
        };
    }
}

module.exports = {sigin, sigout};