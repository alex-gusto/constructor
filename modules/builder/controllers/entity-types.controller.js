const { db } = require('~db')
const Controller = require('~/controllers/abstract.controller.js')

const Model = db.model('EntityTypes')

class EntityTypesController extends Controller {
  constructor() {
    super(Model)
  }
}

module.exports = EntityTypesController
