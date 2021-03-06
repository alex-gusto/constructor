const glob = require('glob');
const path = require('path');
const Router = require('koa-router');
const config = require('../app.config')

const router = new Router();

// Load modules
const modules = config.modules || []
const modulesDir = config.modulesDir || path.resolve(process.cwd(), './modules')

modules.forEach((module) => {
  const route = require(path.resolve(modulesDir, `./${module}/routes`));
  router.use('', route.routes(), route.allowedMethods());
})

// Load routes
glob('*.routes.js', { cwd: path.resolve(__dirname, '.') }, (err, files) => {
  if (err) console.error(err);

  files.forEach((file) => {
    const route = require(`./${file}`);
    router.use('', route.routes(), route.allowedMethods());
  });
});

module.exports = router;
