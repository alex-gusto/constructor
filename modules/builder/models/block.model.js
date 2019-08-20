const { Schema, model } = require('mongoose')

const schema = new Schema({
  blockName: String,
  options: Schema.Types.Mixed,
}, { minimize: false })

model('Block', schema)
