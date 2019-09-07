const { Schema } = require('mongoose')

module.exports = function createSchema(schemaJSON) {
  try {
    const schemaDraft = JSON.parse(schemaJSON)

    return Object.entries(schemaDraft)
      .reduce((schema, [key, value]) => {
        if (typeof value === 'string') {
          schema[key] = Schema.Types[value]
        } else {
          schema[key] = {
            type: Schema.Types[value.type],
            default: value.default
          }
        }

        return schema
      }, {})
  } catch (e) {
    console.log('JSON not valid!')
  }
}
