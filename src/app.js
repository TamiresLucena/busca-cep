const express = require('express')
const cors = require('cors')
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')
const routes = require('./routes')

const app = express()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/', routes)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send(err.message)
})

module.exports = app
