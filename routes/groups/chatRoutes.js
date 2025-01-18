const express = require('express');
const chatController = require('../../controllers/chatController');

const routes = express.Router();

routes.post('/send', chatController.send);
routes.get('/list', chatController.list);

module.exports = routes;