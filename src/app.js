const express = require('express')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/', routes)

module.exports = app
