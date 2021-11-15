const { get } = require('lodash')
const db = require('../../database')
const argon2 = require('argon2')
const { generateJwtToken } = require('./utils')

module.exports = async ({ login, password }) => {
  const user = await db('users').where({ login }).first()
  if (!user) throw new Error('Usuário não encontrado') // 404

  const passwordMatches = await argon2.verify(get(user, 'password'), password)
  if (!passwordMatches) throw new Error('Senha incorreta') // 403

  return {
    token: generateJwtToken({ id: get(user, 'id') })
  }
}
