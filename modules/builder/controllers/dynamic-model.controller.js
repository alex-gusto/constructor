const path = require('path')
const Controller = require('~/controllers/abstract.controller.js')

class DynamicModelController extends Controller {
  constructor() {
    super()
  }

  async create(ctx) {
    const { componentId } = ctx.request.body
    const modelPath = path.resolve(__dirname, `../models/dynamic/${componentId}.model.js`)

    try {
      const model = require(modelPath)
      this.setModel(model)

      await super.create(ctx)
    } catch (e) {
      ctx.status = 404
      ctx.body = `${modelPath} - not found!`
    }
  }
}

module.exports = DynamicModelController
