const { db } = require('@db')
const Controller = require('~/controllers/abstract.controller.js')

const Model = db.model('Pages')

class PageController extends Controller {
  constructor() {
    super(Model)
  }

  // async create(ctx) {
  //   try {
  //
  //   } catch (e) {
  //     ctx.body = e
  //     ctx.status = 500
  //   }
  // }
}

module.exports = PageController
