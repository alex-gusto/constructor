const util = require('util')
const path = require('path')
const readFile = util.promisify(require('fs').readFile)
const compiler = require('vue-template-compiler')
const tempDir = path.resolve(process.cwd(), 'tmp')

// const { Schema } = require('mongoose')
const db = require('../../../mongo')()

const Model = db.model('Block')

exports.post = async (ctx, next) => {
  if (!ctx.request.files) return console.error('No files')

  const { blocks } = ctx.request.files
  const blockName = blocks.name

  if (Array.isArray(blocks)) {
    console.log(blocks)
  } else {
    const filePath = `${tempDir}/sections/${blockName}`
    console.log(filePath)

    readFile(filePath, 'utf-8')
      .then((source) => {
        const result = compiler.parseComponent(source, { pad: 'space' })
        const script = result.script.content
        const helperFunction = new Function(script.replace('export default', 'return '))
        const { props } = helperFunction()

        const schema = {}
        if (Array.isArray(props)) {
          props.reduce((acc, prop) => {
            acc[prop] = ''

            return acc
          }, schema)
        }

        const block = new Model({
          blockName,
          options: schema
        })

        block.save((err) => {
          if (!err) console.log('Success!')
        })
      })
      .catch(e => console.log(e))
  }


  ctx.body = ctx.request.files
}

exports.getAll = async (ctx, next) => {
  try {
    ctx.body = await Model.find()
    ctx.status = 200
  } catch (e) {
    ctx.status = 500
    ctx.body = e
  }
}

exports.update = async (ctx, next) => {
  console.log(ctx.request.body)

  try {
    ctx.body = await Model.updateOne(ctx.request.body)
    ctx.status = 201
  } catch (e) {
    ctx.status = 500
    ctx.body = e
  }
}
