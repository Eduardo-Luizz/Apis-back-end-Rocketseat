const express = require('express') 
const app = express()

app.listen('3003')

// Middleware primeiro passa por ele e após executa o verbo necesario
app.use( express.json() )

app.route('/').get( (request, response) => response.send( request.query ) ) // request.query.nome se quiser so mostrar nome
app.route('/about/user').get( (request, response) => response.send( request.query ) )

console.log('Servidor rodando ...')