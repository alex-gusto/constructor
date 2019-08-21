const Router = require('koa-router')
const glob = require('glob')
const path = require('path')

const router = new Router({
  prefix: '/builder'
})

// Load routes
const files = glob.sync('*.routes.js', { cwd: path.resolve(__dirname, '.') })

files.forEach((file) => {
  const route = require(`./${file}`)
  router.use('', route.routes(), route.allowedMethods())
})

module.exports = router
