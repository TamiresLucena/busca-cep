const db = require('../../database')
const { setCharAt } = require('./utils')
const { set } = require('../../services/keyv')
const Keyv = require('keyv')

const keyv = new Keyv('redis://localhost:6379')

function getAddressByZipCode (zipCode) {
  return db
    .select('*')
    .from('addresses')
    .where({ zip_code: zipCode })
    .first()
}

module.exports = async ({ zipCode }) => {
  console.log(await keyv.set('teste', 'oi'))
  console.log('teste', await keyv.get('teste'))

  let currentZipCode = zipCode

  let size = zipCode.length - 1
  while (size >= 0) {
    const address = await getAddressByZipCode(currentZipCode)
    if (address) return address
    currentZipCode = setCharAt(currentZipCode, size--, '0')
  }
  const error = new Error('CEP não encontrado')
  error.status = 404
  throw error
}
