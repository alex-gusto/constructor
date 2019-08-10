const body = require('koa-body')
const Router = require('koa-router')
const Ctrl = require('../controllers/articles.controller')

const router = new Router()

router
    .get('/articles/:alias', Ctrl.getByAlias)
    .get('/articles/', Ctrl.getAll)
    .post('/articles/article', body(), Ctrl.create)
    .put('/articles/:id', (ctx, next) => {})
    .del('/articles/:id', (ctx, next) => {})

module.exports = router