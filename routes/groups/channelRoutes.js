const express = require('express');
const channelController = require('../../controllers/channelController');

const routes = express.Router();

routes.post('/register', channelController.register);
routes.post('/join', channelController.join);
routes.pist('/leave', channelController.leave);

module.exports = routes;