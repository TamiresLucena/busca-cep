const jwt = require('jsonwebtoken')

module.exports = (content, expiresIn = 86400) => jwt.sign(content, process.env.JWT_PASSWORD, { expiresIn })
