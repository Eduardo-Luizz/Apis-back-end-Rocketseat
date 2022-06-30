const express = require('express') 
const app = express() // Inicializadno o express e guardando o express inicializado na variável app

app.listen('3000') // Está ouvindo a porta 3000

// GET (Navegador só faz GET)

app.route('/').get( (request, response) => response.send("Hello World, This is my first server response") ) // Está enviando para a porta 3000
app.route('/sobre').get( (request, response) => response.send("Hello World, This is route /sobre") )        // Está enviando para a porta 3000

// Middleware primeiro passa por ele e após executa o verbo necesario

app.use( express.json() ) // Transformar tudo em json

// POST

app.route('/').post( (request, response) => response.send(request.body)); // console.log(request.body) para ver no console do vsCode. response.send(request.body) retorna no insomnia o corpo da request enviada