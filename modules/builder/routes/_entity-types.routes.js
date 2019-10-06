const Router = require('koa-router')
const bodyParse = require('koa-body')
const EntityTypesController = require('../controllers/entity-types.controller')

const router = new Router()
const ctrl = new EntityTypesController()

router.post('/entity-types', bodyParse({ multipart: true }), ctrl.create.bind(ctrl))

router.get('/entity-types', ctrl.getAll.bind(ctrl))

router.get('/entity-types/:id', ctrl.getById.bind(ctrl))

router.put('/entity-types/:id', bodyParse({ multipart: true }), ctrl.update.bind(ctrl))

router.delete('/entity-types/:id', ctrl.delete)


module.exports = router
