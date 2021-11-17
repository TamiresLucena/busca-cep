const express = require('express')
const router = express.Router()

const healthRouter = require('./health')
const authenticationRouter = require('./authentication')
const { checkAuthorization, logRequest } = require('./middlewares')
const addressesRouter = require('./addresses')

router
  .use('/health', healthRouter)
  .use('/authentication', authenticationRouter)
  .use(checkAuthorization)
  .use(logRequest)
  .use('/addresses', addressesRouter)

module.exports = router
