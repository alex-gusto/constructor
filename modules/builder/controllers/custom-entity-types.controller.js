const path = require('path')
const capitalize = require('lodash/capitalize')
const { Schema, SchemaTypes } = require('mongoose')
const createSchemaType = require('../utils/create-schema-type')

class CustomEntityTypesController {
  static async load(db) {
    const Model = db.model('EntityTypes')

    const types = await Model.find()
    types.forEach(({ name, schemaDraft }) => {
      const typeName = capitalize(name)

      if (!SchemaTypes[typeName]) {
        console.log(createSchemaType(name))
      }
    })

  }
}

module.exports = CustomEntityTypesController
