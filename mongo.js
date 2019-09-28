const mongoose = require('mongoose')
const blocksModel = require('./modules/builder/models/blocks.model')
const pagesModel = require('./modules/builder/models/pages.model')
const DynamicModelController = require('./modules/builder/controllers/dynamic-model.controller')

const OPTIONS = {
  keepAlive: 1,
  useNewUrlParser: true,
  useFindAndModify: false
}

const db = connect()

// TODO: add auto-loader if modules model
require('./models/articles.model')
blocksModel()
pagesModel()

DynamicModelController.loadDynamicModels(db)

function connect() {
  mongoose.connect(process.env.DB_URL, OPTIONS)
  return mongoose.connection
}

module.exports = {
  connect,
  db
}
