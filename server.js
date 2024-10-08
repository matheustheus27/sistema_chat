require('dotenv').config();

const express = require('express');
const server = express();

const PORT = process.env.PORT || 3000;

server.get('/', (req, res) => {
    res.send('');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});