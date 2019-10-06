const Router = require('koa-router')
const bodyParse = require('koa-body')
// const path = require('path')
const PageController = require('../controllers/pages.controller')

const ctrl = new PageController()

const router = new Router({
  prefix: '/pages'
})

router.get('/', ctrl.getAll.bind(ctrl))

router.get('/:id', ctrl.getById.bind(ctrl))

router.post('/', bodyParse({ multipart: true }), ctrl.create.bind(ctrl))

router.put('/:id', bodyParse({ multipart: true }), ctrl.update.bind(ctrl))

module.exports = router
