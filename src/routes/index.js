const express = require('express')
const router = express.Router()

const addressesRouter = require('./addresses')

router.use('/addresses', addressesRouter)

module.exports = router
