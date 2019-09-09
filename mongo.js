const path = require('path')
const mongoose = require('mongoose')
const { readdirSync } = require('fs')
const eventBus = require('~/utils/event-bus')
const isFunction = require('lodash/isFunction')
const blocksModel = require('./modules/builder/models/blocks.model')

const dynamicModelsDir = path.resolve(__dirname, 'modules/builder/models/dynamic')

const OPTIONS = {
  keepAlive: 1,
  useNewUrlParser: true,
  useFindAndModify: false
}

const db = connect()

// TODO: add auto-loader if modules model
require('./models/articles.model')
require('./modules/builder/models/pages.model')
blocksModel()

// load dynamic models
// readdirSync(dynamicModelsDir)
//   .forEach(file => require(path.join(dynamicModelsDir, file))())

function connect() {
  mongoose.connect(process.env.DB_URL, OPTIONS)
  return mongoose.connection
}

module.exports = {
  connect,
  db
}
