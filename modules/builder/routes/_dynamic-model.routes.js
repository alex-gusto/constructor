const Router = require('koa-router')
const bodyParse = require('koa-body')
// const path = require('path')
const DynamicModelController = require('../controllers/dynamic-model.controller')

const ctrl = new DynamicModelController()

const router = new Router({
  prefix: '/dynamic-model'
})


// router.get('/', ctrl.getAll)

// router.get('/:id', ctrl.getOne)

router.post('/', bodyParse({ multipart: true }), ctrl.create.bind(ctrl))

// router.put('/', bodyParse({ multipart: true }), ctrl.update)

module.exports = router
