require('dotenv').config();

const express = require('express');
const server = express();
const api = require('./routes/api');

const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send('');
});

api(server);

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});