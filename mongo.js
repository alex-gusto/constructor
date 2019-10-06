const mongoose = require('mongoose')
const blocksModel = require('./modules/builder/models/blocks.model')
const entityTypesModel = require('./modules/builder/models/entity-types.model')
const pagesModel = require('./modules/builder/models/pages.model')
const DynamicModelController = require('./modules/builder/controllers/blocks-dynamic-model.controller')
const CustomEntityTypesController = require('./modules/builder/controllers/custom-entity-types.controller')

const OPTIONS = {
  keepAlive: 1,
  useNewUrlParser: true,
  useFindAndModify: false
}

class DynamicStrategy {
  constructor(db) {
    this.db = db
    this.ctrls = [
      {
        loaded: false,
        ctrl: DynamicModelController
      },
      {
        loaded: false,
        ctrl: CustomEntityTypesController
      }
    ]
  }

  push(ctrl) {
    this.ctrls.push({
      loaded: false,
      ctrl
    })
  }

  run() {
    for (const item of this.ctrls) {
      if (!item.loaded) {
        item.ctrl.load(this.db)
        item.loaded = true
      }
    }
  }
}

const db = connect()

// TODO: add auto-loader if modules model
require('./models/articles.model')
blocksModel()
pagesModel()
entityTypesModel()

const dynamicModelsStrategy = new DynamicStrategy(db)
dynamicModelsStrategy.run()

function connect() {
  mongoose.connect(process.env.DB_URL, OPTIONS)
  return mongoose.connection
}

module.exports = {
  connect,
  db
}
