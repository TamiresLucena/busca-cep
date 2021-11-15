const cacheControl = require('express-cache-controller')
const addressValidation = require('./addressValidation')
const checkAuthorization = require('./checkAuthorization')

module.exports = {
  addressValidation,
  cacheControl,
  checkAuthorization
}
