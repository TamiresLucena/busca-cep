const db = require('../../database')
const { setCharAt } = require('./utils')
const redis = require('../../services/redis')

function getAddressByZipCode (zipCode) {
  return db
    .select('*')
    .from('addresses')
    .where({ zip_code: zipCode })
    .first()
}

module.exports = async ({ zipCode }) => {
  const addressCacheKey = `address:${zipCode}`
  const addressCache = await redis.get(addressCacheKey)
  if (addressCache) return { address: addressCache }

  let currentZipCode = zipCode

  let size = zipCode.length - 1
  while (size >= 0) {
    const address = await getAddressByZipCode(currentZipCode)
    if (address) {
      await redis.set(addressCacheKey, address)
      return { address }
    }
    currentZipCode = setCharAt(currentZipCode, size--, '0')
  }
  const error = new Error('CEP não encontrado')
  error.status = 404
  throw error
}
