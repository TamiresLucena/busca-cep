const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/swagger_output.json'
const endpointFiles = ['./src/app.js']

const doc = {
  info: {
    version: '1.0.0',
    title: 'Swagger Busca CEP',
    description: 'API para obter endereço completo a partir de um CEP.'
  },
  host: 'localhost:3000',
  basePath: '/',
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [
    {
      name: 'Saúde',
      description: 'Endpoints relacionados a saúde da aplicação;'
    },
    {
      name: 'Endereços',
      description: 'Endpoints relacionados a endereços;'
    },
    {
      name: 'Usuários',
      description: 'Endpoints relacionados a usuários;'
    }
  ],
  definitions: {
    Saude:
    {
      message: 'Servidor ativo!',
      date: '2021-11-11T01:21:33.983Z',
      uptime: process.uptime()
    },
    Enderecos:
    {
      id: 1,
      zip_code: '12232883',
      location: 'Gentil Raymundo da Silva',
      district: 'Dom Pedro II',
      city: 'São José dos Campos',
      state: 'São Paulo'
    },
    Usuarios:
    {
      id: 1,
      name: 'Tamires Lucena',
      login: 'tlucena'
    }
  }
}

swaggerAutogen(outputFile, endpointFiles, doc)
