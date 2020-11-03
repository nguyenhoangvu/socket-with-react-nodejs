const { Client } = require('pg')

const connectString = 'postgresql://vu:123@localhost:5432/test'

const db = new Client({
  connectionString: connectString
})

db.connect()

module.exports = db