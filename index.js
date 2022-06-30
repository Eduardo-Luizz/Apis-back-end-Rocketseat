const express = require('express') 
const app = express() // Inicializadno o express e guardando o express inicializado na variável app

app.listen('3000') // Está ouvindo a porta 3000

app.route('/').get( (request, response) => response.send("Hello World, This is my first server response") ) // Está enviando para a porta 3000
app.route('/sobre').get( (request, response) => response.send("Hello World, This is route /sobre") )        // Está enviando para a porta 3000