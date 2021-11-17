const cacheControl = require('express-cache-controller')
const addressValidation = require('./addressValidation')
const checkAuthorization = require('./checkAuthorization')
const logRequest = require('./logRequest')

module.exports = {
  addressValidation,
  cacheControl,
  checkAuthorization,
  logRequest
}
