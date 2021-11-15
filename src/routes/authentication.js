const express = require('express')
const router = express.Router()

const { authenticate } = require('../controllers/authentication')

module.exports = router
  .post('/authenticate',
    authenticate

  )
