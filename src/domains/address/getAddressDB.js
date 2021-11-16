const db = require('../../database')

module.exports = (zipCode) =>
  db
    .select('*')
    .from('addresses')
    .where({ zip_code: zipCode })
    .first()
