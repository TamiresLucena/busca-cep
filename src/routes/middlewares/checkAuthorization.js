const { get } = require('lodash')
const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const token = (get(req, 'headers.authorization') || '').split(' ')[1]
  if (!token) throw new Error('Token não fornecido') // 401

  try {
    const tokenData = jwt.verify(token, process.env.JWT_PASSWORD)
    const userId = get(tokenData, 'id')
    req.user = { id: userId }

    next()
  } catch (err) {
    throw new Error('Token inválido') // 401
  }
}
