const Router = require('koa-router')
// const bodyParse = require('koa-body')
const Ctrl = require('../controllers/pages.controller')

const router = new Router({
  prefix: '/front-api',
})

router.get('/en/pages/home', Ctrl.get)

router.get('/', (ctx) => {
  ctx.body = {
    data: {
      type: 'globals',
      id: 'data',
      attributes: {
        scripts: {
          head: {
            end: '<script>console.log("end head")</script>',
          },
          body: {
            begin: '<script>console.log("begin body")</script>',
            end: '<script>console.log("end body")</script>',
          },
        },
        menu: {
          data: [],
        },
      },
    },
  }
})

module.exports = router
