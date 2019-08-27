class Controller {
  constructor(model) {
    this.model = model
  }

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

  async getAll() {
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
    const article = new this.model(ctx.request.body)

    try {
      ctx.body = await article.save()
      ctx.status = 201
    } catch (e) {
      ctx.status = 500
      ctx.body = e
    }
  }

  async update(ctx) {

  }

  async delete(ctx) {

  }
}

module.exports = Controller

