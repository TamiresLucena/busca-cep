const { query } = require('express-validator')

module.exports = query('zip_code')
  .matches(/^\d{8}$/)
  .withMessage('Deve ser um CEP válido!')
