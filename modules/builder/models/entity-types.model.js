const { Schema, model } = require('mongoose')

const schema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      require: true,
      unique: true
    },
    schemaDraft: Schema.Types.Mixed
  },
  { minimize: false }
)

module.exports = model('EntityTypes', schema)
