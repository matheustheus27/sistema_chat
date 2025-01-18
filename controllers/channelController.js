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

async function register(req, res) {
    const validation = controller.validation(req.body, {
        usersId: "required|array"
    });

    if(validation.status) {
        const result = channelService.register(req.body);

        if(result.status) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } else {
        res.status(400).json(validation);
    }
}

async function join(req, res) {
    const validation = controller.validation(req.body, {
        id: "required|string",
        userId: "required|string",
    });

    if(validation.status) {
        const result = channelService.join(req.body);

        if(result.status) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } else {
        res.status(400).json(validation);
    }
}

async function leave(req, res) {
    const validation = controller.validation(req.body, {
        id: "required|string",
        userId: "required|string",
    });

    if(validation.status) {
        const result = channelService.leave(req.body);

        if(result.status) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } else {
        res.status(400).json(validation);
    }
}

module.exports = {sigin, sigout, register, join, leave};