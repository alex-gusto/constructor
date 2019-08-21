const Router = require('koa-router')
const glob = require('glob')
const path = require('path')

const router = new Router({
  prefix: '/builder'
})

// Load routes
glob('*.routes.js', { cwd: path.resolve(__dirname, '.') }, (err, files) => {
  if (err) console.error(err)
  files.forEach((file) => {
    const route = require(`./${file}`)
    console.log(route)
    router.use('', route.routes(), route.allowedMethods())
  })
})

module.exports = router
