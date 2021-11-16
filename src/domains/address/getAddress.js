const { setCharAt } = require('./utils')
const redis = require('../../services/redis')
const getAddressDB = require('./getAddressDB')

module.exports = async ({ zipCode }) => {
  const isTest = process.env.ENV === 'TEST'
  const addressCacheKey = `address:${zipCode}`

  if (!isTest) {
    const addressCache = await redis.get(addressCacheKey)
    if (addressCache) return { address: addressCache }
  }

  let currentZipCode = zipCode

  let size = zipCode.length - 1
  while (size >= 0) {
    const address = await getAddressDB(currentZipCode)
    if (address) {
      if (!isTest) await redis.set(addressCacheKey, address)
      return { address }
    }
    currentZipCode = setCharAt(currentZipCode, size--, '0')
  }
  const error = new Error('CEP não encontrado')
  error.status = 404
  throw error
}
