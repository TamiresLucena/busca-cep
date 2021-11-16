const express = require('express')
const router = express.Router()

const { addressValidation, cacheControl } = require('./middlewares')
const { getAddress } = require('../controllers/addresses')

module.exports = router
  .get('/address',
    addressValidation,
    cacheControl({ maxAge: 60000 }),
    getAddress
  )
