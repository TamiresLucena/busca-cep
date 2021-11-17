const { get } = require('lodash')
const db = require('../../database')

module.exports = async (req, res, next) => {
  const requestUrl = get(req, 'originalUrl')
  const userId = get(req, 'user.id')

  await db('logs').insert({ user_id: userId, request_url: requestUrl })

  next()
}
