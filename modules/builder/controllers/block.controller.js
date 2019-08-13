// const db = require('../mongo')()

// const Model = db.model('Article')
const util = require('util')
const Vue = require('vue');
const readFile = util.promisify(require('fs').readFile)
const writeFile = util.promisify(require('fs').writeFile)
const { createDefaultCompiler, assemble } = require('@vue/component-compiler');

const compiler = createDefaultCompiler()

const filePath = 'D:/Projects/constructor/temp/sections/SectionContent.vue'
const fileName = 'SectionContent.vue'

readFile(filePath, 'utf-8').then((source) => {
  const result = compiler.compileToDescriptor(fileName, source)
  const file = assemble(compiler, fileName, result, {
    // normalizer: '~vue-runtime-helpers/dist/normalize-component.js',
  })

  const match = file.code.match(/props:\s+?(\[[^]]+\])/);
  console.log(match)
})

exports.post = async (ctx, next) => {
  // const article = new Model(ctx.request.body)

  console.log(ctx.request.files.blocks)
  ctx.body = ctx.request.files;
}
