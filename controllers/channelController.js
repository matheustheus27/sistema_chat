const controller = require('./controller');
const channelService = require('../services/channelService');

async function sigin(socketId, data) {
    const validation = controller.validation(data, {
        userId: 'required|string',
    });
    
    if(validation.status) {
        const result = channelService.sigin(socketId, data);
    
        return result;
    } else {
        return validation;
    }
}

async function sigout(socketId, data) {
    const validation = controller.validation(data, {
        userId: 'required|string',
    });
    
    if(validation.status) {
        const result = channelService.sigout(socketId, data);
    
        return result;
    } else {
        return validation;
    }
}

module.exports = {sigin, sigout};