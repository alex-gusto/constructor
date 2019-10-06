const Router = require('koa-router')
const bodyParse = require('koa-body')
const path = require('path')
const BlocksController = require('../controllers/blocks.controller')

const router = new Router()
const ctrl = new BlocksController()

router.post('/blocks', bodyParse({
  multipart: true,
  formidable: {
    uploadDir: `${process.cwd()}/tmp/sections`,
    onFileBegin: (name, file) => {
      const folder = path.dirname(file.path)
      file.path = path.join(folder, file.name)
    }
  }
}), ctrl.create.bind(ctrl))

router.get('/blocks', ctrl.getAll.bind(ctrl))

router.get('/blocks/:id', ctrl.getById.bind(ctrl))

router.put('/blocks/:id', bodyParse({ multipart: true }), ctrl.update.bind(ctrl))

router.delete('/blocks/:id', ctrl.delete)


module.exports = router
