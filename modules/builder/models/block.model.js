const { Schema, model } = require('mongoose')

const schema = new Schema({
  blockName: String,
  options: Schema.Types.Mixed
})

model('Block', schema)
