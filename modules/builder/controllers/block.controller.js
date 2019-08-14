// const db = require('../mongo')()

// const Model = db.model('Article')
const util = require('util')
const Vue = require('vue')
const path = require('path')
const readFile = util.promisify(require('fs').readFile)
const writeFile = util.promisify(require('fs').writeFile)
const { createDefaultCompiler, assemble } = require('@vue/component-compiler')

const tempDir = path.resolve(process.cwd(), 'tmp')
const compiler = createDefaultCompiler()
const filePath = `${tempDir}/sections/SectionContent.vue`
const fileName = 'SectionContent.vue'

readFile(filePath, 'utf-8')
  .then((source) => {
    const input = compiler.compileToDescriptor(fileName, source)
    input.script.code = input.script.code.replace(/^\s+/gm, '')
    input.template.code = ''
    input.template.source = ''
    input.styles = []
    console.log(input)
    const result = assemble(compiler, fileName, input, {
      // normalizer: '~vue-runtime-helpers/dist/normalize-component.js',
    })

    writeFile(`${tempDir}/test.js`, result.code)
  })
  .catch(e => {
    console.log(e)
  })


exports.post = async (ctx, next) => {
  // const article = new Model(ctx.request.body)

  const file = require(`${tempDir}/test.js`)

  console.log(file)
  ctx.body = ctx.request.files
}
