const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');
const bodyParse = require('koa-body');
const router = require('./router');
require('dotenv').config()

const initApp = () => {
  const app = new Koa();

  router.prefix(process.env.VUE_APP_API_PREFIX)

  app
    // .use(bodyParse({
    //   multipart: true,
    //   formidable: {
    //     uploadDir: `${process.cwd()}/temp`,
    //     onFileBegin: (name, file) => {
    //       const folder = path.dirname(file.path);
    //       file.path = path.join(folder, file.name);
    //     },
    //   },
    // }))
    .use(router.routes())
    .use(serve(`${__dirname}/dist`))
    .listen({ port: process.env.SERVER_PORT }, () => console.log(`🚀 Server ready at http://localhost:${process.env.SERVER_PORT}`));
};

initApp();
