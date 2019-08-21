const Router = require('koa-router')
const bodyParse = require('koa-body')
// const path = require('path')
const Ctrl = require('../controllers/pages.controller')

const router = new Router({
  prefix: '/pages'
})

router.get('/:id', Ctrl.get)

router.post('/', bodyParse({ multipart: true }), Ctrl.create)

router.put('/', bodyParse({ multipart: true }), Ctrl.update)

module.exports = router
