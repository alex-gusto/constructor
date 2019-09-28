const path = require('path')
const createSchema = require('../utils/create-schema')
const createModel = require('../utils/create-model')
const { Schema } = require('mongoose')

class DynamicModelController {
  static async loadDynamicModels(db) {
    const Model = db.model('Blocks')

    const blocks = await Model.find()
    blocks.forEach(block => {
      const optionsSchama = createSchema(block.schemaDraft)
      const schema = {
        componentName: {
          type: Schema.Types.String,
          default: block.componentName
        },
        options: optionsSchama
      }

      createModel(block._id.toString(), schema)
    })

    console.log(db.modelNames())
  }
}

module.exports = DynamicModelController
