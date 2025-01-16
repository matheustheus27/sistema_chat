const chatService = require('../services/chatService');

async function send(req, res) {
    try {
        const message = chatService.send(req.body);

        res.status(201).json(message);
    } catch(error) {
        res.status(500).json({status: false, error: error.message});
    }
}

function list(req, res) {

}

module.exports = {send, list};