const express = require('express')
const router = express.Router()

const authenticationRouter = require('./authentication')
const { checkAuthorization } = require('./middlewares')
const addressesRouter = require('./addresses')

router
  .use('/authentication', authenticationRouter)
  .use(checkAuthorization)
  .use('/addresses', addressesRouter)

module.exports = router
