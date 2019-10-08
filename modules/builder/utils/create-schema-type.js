const mongoose = require('mongoose')
const { isPrimitive } =require('~/utils/types')

function create(name, schemaDraft) {
  class Type extends mongoose.SchemaType {
    constructor(key, options) {
      super(key, options, name)
    }
  }

  if (isPrimitive(schemaDraft)){
    Type.prototype.cast = castForPrimitive
  } else {
    Type.prototype.cast = castForObject
  }  

  Object.defineProperty(Type, 'name', { value: name });

  function castForPrimitive(val) {
    return val;
  }

  function castForObject(val) {
    val.log
    return val
  }

  return Type
}

module.exports = create
