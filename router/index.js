const glob = require('glob');
const path = require('path');
const Router = require('koa-router');

const router = new Router();

glob('*.routes.js', { cwd: path.resolve(__dirname, '.') }, (err, files) => {
  if (err) console.error(err);

  files.forEach((file) => {
    const route = require(`./${file}`);
    router.use('', route.routes(), route.allowedMethods());
  });
});

module.exports = router;
