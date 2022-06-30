const express = require('express') 
const app = express()

app.listen('3002')

// Middleware primeiro passa por ele e após executa o verbo necesario
app.use( express.json() )

app.route('/').get( (request, response) => response.send( "Não passou paramâmetro na rota" ))
app.route('/:variavel').get( (request, response) => response.send( request.params.variavel ))
app.route('/identidade/:variavel').get( (request, response) => response.send( request.params.variavel ))

console.log('Servidor rodando ...')