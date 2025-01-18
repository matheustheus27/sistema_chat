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
            message: 'Error when connecting!',
            error: {
                message: error.message,
                path: error.stack,
                type: error.name
            }
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
            message: 'Error when disconnecting!',
            error: {
                message: error.message,
                path: error.stack,
                type: error.name
            }
        };
    }
}

async function register(data) {
    try {
        const channel = new Channel({
            id: data.id,
            usersId: data.usersId
        });

        await channel.save();

        return {
            status: true,
            message: 'Successfully created channel!'
        };
    } catch(error) {
        return {
            status: true,
            message: 'Error creating channel!',
            error: {
                message: error.message,
                path: error.stack,
                type: error.name
            }
        };
    }
}

async function join(data) {
    try {
        await Channel.updateOne(
            {id: data.channelId},
            {$addToSet: {usersId: data.userId}}
        );

        return {
            status: true,
            message: 'Successfully entered channel!'
        };
    } catch(error) {
        return {
            status: true,
            message: 'Error entering channel!',
            error: {
                message: error.message,
                path: error.stack,
                type: error.name
            }
        };
    }
}

async function leave(data) {
    try {
        await Channel.updateOne(
            {id: data.channelId},
            {$pull: {usersId: data.userId}}
        );

        return {
            status: true,
            message: 'Successfully leave channel!'
        };
    } catch(error) {
        return {
            status: true,
            message: 'Error leaving channel!',
            error: {
                message: error.message,
                path: error.stack,
                type: error.name
            }
        };
    }
}

module.exports = {sigin, sigout, register, join, leave};