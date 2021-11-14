const express = require('express')
const router = express.Router()

const { addressValidation, cacheControl } = require('./middlewares')
const { getAddress } = require('../controllers/addresses')

module.exports = router.get(
  '/',
  addressValidation,
  cacheControl({ maxAge: 60000 }),
  getAddress

  /*
      #swagger.tags = ['Endereços']
      #swagger.description = 'Endpoint para buscar endereço a partir de um CEP'
      #swagger.parameters['zip_code'] = {
        in: 'query',
        description: 'Informações do produto',
        required: true,
        type: 'object',
        schema: { $ref: '#/definitions/Enderecos'}
      }
      #swager.responses[200] = {
          description: 'Endereço encontrado'
      }
      #swagger.responses[400] = {
          description: 'CEP Inválido'
      }
      #swagger.responses[401] = {
          description: 'Não autorizado'
      }
          #swagger.responses[404] = {
          description: 'Não encontrado'
      }
    */
)
