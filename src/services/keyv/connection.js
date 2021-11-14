const Keyv = require('keyv')

const connection = process.env.REDIS_CONNECTION_STRING ? new Keyv(process.env.REDIS_CONNECTION_STRING) : new Keyv()

module.exports = connection
