const mongoose = require('mongoose')

const OPTIONS = {
  keepAlive: 1,
  useNewUrlParser: true,
  useFindAndModify: false
}

const db = connect()

function connect() {
  require('./models/articles.model')

  // TODO: add auto-loader if modules model
  require('./modules/builder/models/blocks.model')
  require('./modules/builder/models/pages.model')

  mongoose.connect(process.env.DB_URL, OPTIONS)
  return mongoose.connection
}

module.exports = {
  connect,
  db
}
