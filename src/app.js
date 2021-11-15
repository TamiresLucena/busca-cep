const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const routes = require('./routes')

const app = express()

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.get('/health', (req, res) => {
  const data = {
    message: 'Servidor ativo!',
    date: new Date(),
    uptime: process.uptime()
  }

  /*
    #swagger.tags = ['Saúde']
    #swagger.description = 'Endpoint para saúde da aplicação'
    #swagger.responses[200] = {
      description: 'Servidor ativo!',
      schema: {$ref: "#/definitions/Saude"}
    }
    #swagger.responses[404] = {
      description: 'Não encontrado.'
    }
    #swagger.responses[400] = {
      description: 'Desculpe, tivemos um problema com a requisição!'
    }
  */

  res.status(200).json(data)
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', routes)

module.exports = app
