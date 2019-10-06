const { db } = require('~db')
const Controller = require('~/controllers/abstract.controller.js')

const Model = db.model('Pages')

class PageController extends Controller {
  constructor() {
    super(Model)
  }

  async getPage(ctx) {
    const { alias } = ctx.params
    const pageData = await this.model.findOne({ alias })
      .populate({
        path: 'blocks.blockId'
      })
      .lean()

    if (pageData) {
      pageData.blocks = pageData.blocks.map(block => block.blockId)
      ctx.body = pageData
    } else {
      Controller.throwError(ctx, {
        status: 404,
        message: 'Page data not found!'
      })
    }
  }
}

module.exports = PageController
