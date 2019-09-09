const { Schema } = require('mongoose')
const capitalize = require('lodash/capitalize')

module.exports = function createSchema(schemaDraft) {
  if (!schemaDraft) throw new Error('SchemaDraft is not valid!')

  return Object.entries(schemaDraft)
    .reduce((schema, [key, value]) => {
      if (typeof value === 'string') {
        schema[key] = setSchemaType(value)
      } else {
        schema[key] = {
          type: setSchemaType(value.type),
          default: value.default
        }
      }

      return schema
    }, {})
}

function setSchemaType(type) {
  type = capitalize(type)

  if (type in Schema.Types) {
    return Schema.Types[type]
  }

  return Schema.Types.Mixed
}
