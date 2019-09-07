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
      ctx.status = 404
      ctx.body = 'Page Not found'
    }
  }

  async getAll(ctx) {
    const data = await this.model.find()

    if (data) {
      ctx.status = 200
      ctx.body = data
    } else {
      ctx.status = 500
      ctx.body = 'No found pages'
    }
  }

  async create(ctx) {
    const unit = new this.model(ctx.request.body)

    try {
      ctx.body = await unit.save()
      ctx.status = 201
    } catch (e) {
      ctx.status = 500
      ctx.body = e
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
      ctx.status = 500
      ctx.body = e
    }
  }

  async delete(ctx) {
    const { id } = ctx.params
    console.log(id)

    try {
      ctx.body = await this.model.findByIdAndDelete({ _id: id })
      ctx.status = 201
    } catch (e) {
      ctx.status = 500
      ctx.body = e
    }
  }
}

module.exports = Controller

