class Controller {
  constructor(model) {
    this.model = model
  }

  setModel(model) {
    this.model = model
  }

  /**
   *
   * @param ctx - koa context
   * @param conditions - for finding
   * @return {Promise<void>}
   */
  async getOne(ctx, conditions) {
    const result = await this.model.findOne(conditions)

    if (result) {
      ctx.status = 200
      ctx.body = result
    } else {
      Controller.throwError(ctx, {
        status: 404,
        message: 'Pages not found!'
      })
    }
  }

  async getAll(ctx) {
    const data = await this.model.find()

    if (data) {
      ctx.status = 200
      ctx.body = data
    } else {
      Controller.throwError(ctx, {
        status: 404,
        message: 'Pages not found!'
      })
    }
  }

  async create(ctx) {
    const unit = new this.model(ctx.request.body)

    try {
      ctx.body = await unit.save()
      ctx.status = 201
    } catch (e) {
      Controller.throwError(ctx, { message: e.toString() })
    }
  }

  async update(ctx) {
    const { id } = ctx.params
    const { options } = ctx.request.body
    console.log(id, options)

    try {
      ctx.body = await this.model.findByIdAndUpdate({ _id: id }, { options })
      ctx.status = 201
    } catch (e) {
      Controller.throwError(ctx, { message: e.toString() })
    }
  }

  async delete(ctx) {
    const { id } = ctx.params
    console.log(id)

    try {
      ctx.body = await this.model.findByIdAndDelete({ _id: id })
      ctx.status = 201
    } catch (e) {
      Controller.throwError(ctx, { message: e.toString() })
    }
  }

  static throwError(ctx, { status = 500, message = 'Error message' }) {
    ctx.status = 500
    ctx.body = message
  }

  static validator(ctx, body) {
    ctx.status = 422
    ctx.body = body
  }
}

module.exports = Controller

