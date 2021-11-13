const { validationResult } = require('express-validator')
const { get } = require('lodash')
const { getAddress } = require('../../domains/address')

module.exports = async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  try {
    const result = await getAddress({
      zipCode: get(req, 'query.zip_code')
    })
    res.status(200).json(result)
  } catch (error) {
    res.status(error.status).json({
      error: {
        message: error.message
      }
    })
  }
}
