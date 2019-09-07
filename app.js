require('dotenv')
  .config()

const Koa = require('koa')
const serve = require('koa-static')
const router = require('./router')
const { connect, db } = require('./mongo')

router.prefix(process.env.VUE_APP_API_PREFIX)

const app = new Koa()

// add middleware
app
  .use(router.routes())
  .use(serve(`${__dirname}/dist`))

// connect database
db
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen)

function listen() {
  app.listen(
    { port: process.env.SERVER_PORT },
    () => console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}`)
  )
}


