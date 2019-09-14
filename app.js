require('dotenv')
  .config()

const Koa = require('koa')
const Router = require('koa-router')
const serve = require('koa-static')
// const router = require('./router')
const { connect, db } = require('./mongo')
const { Nuxt, Builder } = require('nuxt')

// router.prefix(process.env.VUE_APP_API_PREFIX)

const app = new Koa()
const routerAdmin = new Router({
  prefix: '/admin'
});


(async () => {
  const nuxtAdmin = new Nuxt(require('./views/admin/nuxt.config'))
  const builderAdmin = new Builder(nuxtAdmin)
  await builderAdmin.build()
  routerAdmin.get('/', (ctx) => {
    console.log('url admin: ', ctx.req.url)
    ctx.status = 200
    ctx.respond = false // Mark request as handled for Koa
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    nuxtAdmin.render(ctx.req, ctx.res)
  })

  const nuxt = new Nuxt(require('./views/front/nuxt.config'))
  const builder = new Builder(nuxt)
  await builder.build()

  // add middleware
  app
    .use(routerAdmin.routes())
    .use(ctx => {
      console.log('url: ', ctx.req.url)
      ctx.status = 200
      ctx.respond = false // Mark request as handled for Koa
      ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res)
    })
    .use(serve(`${__dirname}/dist`))

  listen(app)

// connect database
//   db
//     .on('error', console.log)
//     .on('disconnected', connect)
//     .once('open', listen)
})()

function listen() {
  app.listen(
    { port: process.env.SERVER_PORT },
    () => console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}`)
  )
}


