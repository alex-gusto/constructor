const Router = require('koa-router')
const bodyParse = require('koa-body')
// const path = require('path')
const PageController = require('../controllers/pages.controller')

const Ctrl = new PageController()

const router = new Router({
  prefix: '/pages'
})

router.get('/', Ctrl.getAll)

router.get('/:id', Ctrl.getOne)

router.post('/', bodyParse({ multipart: true }), Ctrl.create)

router.put('/', bodyParse({ multipart: true }), Ctrl.update)

module.exports = router
