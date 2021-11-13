require('dotenv').config()
const db = require('./index')

const migrate = async () => {
  try {
    await db.migrate.latest()
    db.destroy()
  } catch (err) {
    db.destroy()
    throw err
  }
}

migrate()
