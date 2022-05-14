const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('api/v1/wallet', (req, res) => res .status(200)
 .send({ mensagem: 'Bem vindo a API' 
})),

app.listen(port, () => console.log ('O servidor está rodando na porta 3000'))



module.exports = app