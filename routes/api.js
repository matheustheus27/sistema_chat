const express = require('express');
const chatRoutes = require('./groups/chatRoutes');
const channelRoutes = require('./groups/channelRoutes');

function api(server) {
    const routes = express.Router();

    routes.use('/chat', chatRoutes);
    routes.use('/channel', channelRoutes);

    server.use('/api', routes);
}

module.exports = api;