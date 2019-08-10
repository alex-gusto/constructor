const Koa = require('koa');
const serve = require('koa-static');
const router = require('./router');
require('dotenv').config()

const initApp = () => {
  const app = new Koa();

  router.prefix(process.env.VUE_APP_API_PREFIX)

  app
    .use(router.routes())
    .use(serve(`${__dirname}/dist`))
    .listen({ port: process.env.SERVER_PORT }, () => console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}`));
};

initApp();
