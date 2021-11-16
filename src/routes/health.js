const express = require('express')
const router = express.Router()

const { getHealth } = require('../controllers/health')

module.exports = router
  .get('/health',
    getHealth
  )
