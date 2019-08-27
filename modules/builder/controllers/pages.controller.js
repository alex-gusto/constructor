const db = require('@db')()
const Controller = require('~/controllers/abstract.controller.js')

const Model = db.model('Pages')

class PageController extends Controller {
  constructor() {
    super(Model)
  }
}

module.exports = PageController
