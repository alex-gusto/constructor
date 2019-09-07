const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    componentName: String,
    options: Schema.Types.Mixed
  },
  { minimize: false }
)

module.exports = model('Blocks', schema)
