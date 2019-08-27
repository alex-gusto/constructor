const db = require('@db')()
const Controller = require('~/controllers/abstract.controller.js')

const Model = db.model('Pages')

class PageController extends Controller {
  constructor() {
    super(Model)
  }

  async getPage(ctx) {
    const { alias } = ctx.params
    await this.getOne(ctx, { alias })
  }
}

module.exports = PageController
