const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    componentName: String,
    schemaDraft: Schema.Types.Mixed
  },
  { minimize: false }
)

module.exports = model('Blocks', schema)
