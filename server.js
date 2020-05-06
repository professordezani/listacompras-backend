const express = require('express');

const server = express();

server.get('/', function(request, response) {
    response.send('Hello World, Fatec!');
})

server.listen(process.env.PORT || 3000);