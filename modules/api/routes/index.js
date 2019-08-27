const Router = require('koa-router')
// const bodyParse = require('koa-body')
const PageController = require('../controllers/pages.controller')

const ctrl = new PageController()

const router = new Router({
  prefix: '/front-api'
})

router.get('/en/pages/:alias', ctrl.getPage.bind(ctrl))

router.get('/', (ctx) => {
  ctx.body = {
    data: {
      type: 'globals',
      id: 'data',
      attributes: {
        scripts: {
          head: {
            end: '<script>console.log("end head")</script>'
          },
          body: {
            begin: '<script>console.log("begin body")</script>',
            end: '<script>console.log("end body")</script>'
          }
        },
        menu: {
          data: []
        }
      }
    }
  }
})

module.exports = router
