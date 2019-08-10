const db = require('../mongo')()
const Model = db.model('Article')

exports.create = async (ctx, next) => {
    const article = new Model(ctx.request.body)

    try {
        ctx.body = await article.save()
        ctx.status = 201
    } catch (e) {
        ctx.status = 500
        ctx.body = e
    }
}

exports.getAll = async (ctx, next) => {
    try {
        ctx.body = await Model.find()
        ctx.status = 200
    } catch (e) {
        ctx.status = 500
        ctx.body = e
    }
}


exports.getByAlias = async (ctx, next) => {

    try {
        const article = await Model.findOne({
            alias: ctx.params.alias
        })
        if (article) {
            ctx.status = 200
            ctx.body = article
        } else{
            ctx.status = 404
            ctx.body = 'Article not Found'
        }
    } catch (e) {
        ctx.status = 500
        ctx.body = e
    }
}