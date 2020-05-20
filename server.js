const express = require('express');
const database = require('./database');
const cors = require('cors');

const server = express();

server.use(cors());
server.use(express.json());

server.get('/', async function(request, response) {
    const dados = await database.read();
    return response.json(dados);
})

server.post('/', async function(request, response) { 

    const nome = request.body.nome; // JSON
    const quantidade = request.body.quantidade;

    const result = await database.create(nome, quantidade);

    return response.status(204).send();
})

server.listen(process.env.PORT || 3000);
