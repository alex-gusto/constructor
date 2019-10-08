const path = require('path')
const capitalize = require('lodash/capitalize')
const { Schema, SchemaTypes, model } = require('mongoose')
const createSchemaType = require('../utils/create-schema-type')

class CustomEntityTypesController {
  static async load(db) {
    const Model = db.model('EntityTypes')

    const types = await Model.find()
    types.forEach(({ name, schemaDraft }) => {
      const typeName = capitalize(name)

      if (!SchemaTypes[typeName]) {
        Schema.Types[typeName] = createSchemaType(name)
      }
    })

    CustomEntityTypesController.test()
  }

  static test(){
    var testSchema = new Schema({ test: SchemaTypes.Image });
    var Test = model('CustomTypeExample', testSchema);

    var t = new Test();
    t.test = 'abc';
    console.log(t.validateSync());
  }
}

module.exports = CustomEntityTypesController
