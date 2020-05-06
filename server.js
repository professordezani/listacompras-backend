const express = require('express');

const server = express();

server.get('/', function(request, response) {
    response.send('Lista de Compras, editado.');
})

server.listen(process.env.PORT || 3000);
