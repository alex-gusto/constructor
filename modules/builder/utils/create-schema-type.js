const mongoose = require('mongoose')

function create(name, schemaDraft) {
  class Type extends mongoose.SchemaType {
    constructor(key, options) {
      super(key, options, name)

      this.schemaDraft = schemaDraft
    }

    get rootType() {
      return typeof this.schemaDraft
    }

    cast(val) {

    }
  }

  return Type
}

module.exports = create
