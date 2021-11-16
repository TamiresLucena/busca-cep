const { get } = require('lodash')
const { authenticate } = require('../../domains/authentication')

module.exports = async (req, res) => {
  try {
    const result = await authenticate({
      login: get(req, 'body.login'),
      password: get(req, 'body.password')
    })
    res.status(200).json(result)
  } catch (error) {
    res.status(error.status || 500).json({
      error: {
        message: error.message
      }
    })
  }
}
