const express = require('express');

const server = express();

server.get('/', function(request, response) {
    response.send('Lista de Compras');
})

server.listen(process.env.PORT || 3000);