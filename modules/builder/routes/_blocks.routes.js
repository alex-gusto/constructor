const Router = require('koa-router')
const bodyParse = require('koa-body')
const path = require('path')
const Ctrl = require('../controllers/blocks.controller')

const router = new Router()

router.post('/blocks', bodyParse({
  multipart: true,
  formidable: {
    uploadDir: `${process.cwd()}/tmp/sections`,
    onFileBegin: (name, file) => {
      const folder = path.dirname(file.path)
      file.path = path.join(folder, file.name)
    }
  }
}), Ctrl.post)

router.get('/blocks', Ctrl.getAll)

router.put('/blocks', bodyParse({ multipart: true }), Ctrl.update)


router.delete('/blocks/:id', Ctrl.delete)


module.exports = router
