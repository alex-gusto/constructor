const Router = require('koa-router')
const bodyParse = require('koa-body')
const path = require('path')
const Ctrl = require('../controllers/block.controller')

const router = new Router({
  prefix: '/builder',
})

router.post('/', bodyParse({
  multipart: true,
  formidable: {
    uploadDir: `${process.cwd()}/temp/sections`,
    onFileBegin: (name, file) => {
      const folder = path.dirname(file.path);
      file.path = path.join(folder, file.name);
    },
  },
}), Ctrl.post)

module.exports = router
