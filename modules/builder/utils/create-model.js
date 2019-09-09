const { model, Schema } = require('mongoose')

module.exports = function createModel(name, schema) {
  const schemaInstance = new Schema(schema)

  return model(name, schemaInstance)
}
