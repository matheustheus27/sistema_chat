const controller = require('./controller');
const chatService = require('../services/chatService');

async function send(req, res) {
    const validation = controller.validation(req.body, {
        sender: 'required|string',
        receiver: 'required|string',
        message: 'required|string'
    });

    if(validation.status) {
        const result = chatService.send(req.body);

        if(result.status) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } else {
        res.status(400).json(validation);
    }   
}

async function list(req, res) {
    const validation = controller.validation(req.query, {
        receiver: "required|string"
    });

    if(validation.status) {
        const result = chatService.list(req.query);

        if(result.status) {
            res.status(201).json(result);
        } else {
            res.status(500).json(result);
        }
    } else {
        res.status(400).json(validation);
    }
}

module.exports = {send, list};