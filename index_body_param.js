const express = require('express') 
const app = express()

app.listen('3001')

// Middleware primeiro passa por ele e após executa o verbo necesario
app.use( express.json() )

app.route('/').post( (request, response) => {
  const { nome, cidade } = request.body
  response.send(`Seu nome: ${nome} cidade: ${cidade}`) // retorna apenas nome e cidade
  // response.send(request.body) // retorna o json completo
})

console.log('Servidor rodando ...')