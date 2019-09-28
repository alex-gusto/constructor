require('dotenv')
  .config()

const Koa = require('koa')
const serve = require('koa-static')
const router = require('./router')
const { connect, db } = require('./mongo')
const { Nuxt, Builder } = require('nuxt')

router.prefix(process.env.VUE_APP_API_PREFIX)

const isDev = process.env.NODE_ENV === 'production'

const app = new Koa();

(async () => {
  const nuxt = new Nuxt(require('./views/front/nuxt.config'))
  const builder = new Builder(nuxt)

  if (isDev) {
    subscribeDB()
    await builder.build()
  }

  // add middleware
  app
    .use(router.routes())
    .use(ctx => {
      ctx.status = 200
      ctx.respond = false // Mark request as handled for Koa
      ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
      nuxt.render(ctx.req, ctx.res)
    })
    .use(serve(`${__dirname}/dist`))

  if (!isDev) subscribeDB()
})()

function subscribeDB() {
  // connect database
  db
    .on('error', console.log)
    .on('disconnected', connect)
    .once('open', listen)
}

function listen() {
  app.listen(
    { port: process.env.SERVER_PORT },
    () => console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}`)
  )
}


