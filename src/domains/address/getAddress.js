const db = require('../../database')
const { setCharAt } = require('./utils')

function getAddressByZipCode (zipCode) {
  return db
    .select('*')
    .from('addresses')
    .where({ zip_code: zipCode })
    .first()
}

module.exports = async ({ zipCode }) => {
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
