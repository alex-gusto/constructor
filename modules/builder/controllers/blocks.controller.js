const path = require('path')
const { db } = require('~db')
const { promisify } = require('util')
const isFunction = require('lodash/isFunction')
const compiler = require('vue-template-compiler')
const readFile = promisify(require('fs').readFile)
// const writeFile = promisify(require('fs').writeFile)
const Controller = require('~/controllers/abstract.controller.js')
// const { Schema } = require('mongoose')
const eventBus = require('~/utils/event-bus')

const blocksDir = path.resolve(process.cwd(), 'tmp/sections/')
const Model = db.model('Blocks')

class BlocksController extends Controller {
  constructor() {
    super(Model)
  }

  async create(ctx) {
    try {
      const { files } = ctx.request

      if (!files) {
        ctx.body = 'No files found!'
        ctx.status = 422
      }

      const { components } = files

      if (!components) {
        ctx.body = 'No components found!'
        ctx.status = 422
      }

      const parseAndSaveComponentSchema = async (componentName) => {
        const source = await loadComponent(componentName)
        const props = getComponentProps(source)

        if (!props) throw new Error('No props found!')

        const schemaDraft = createMongoSchemaDraft(props)

        const block = new this.model({
          componentName: removeExtensions(componentName),
          schemaDraft
        })

        return await block.save()

        // // add component id
        // schemaDraft.blockId = {
        //   type: 'ObjectId',
        //   default: result._id
        // }
        //
        // // add component name
        // schemaDraft.componentName = {
        //   type: 'String',
        //   default: removeExtensions(componentName)
        // }
        //
        // eventBus.emit('AddModel', schemaDraft)

        // const fileSource = `
        // const { Schema, model } = require('mongoose')
        // const createSchema = require('../../utils/create-schema.js')
        //
        // const schema = new Schema(createSchema('${JSON.stringify(schemaDraft)}'))
        // module.exports = model('${componentId}', schema)
        // `
        // const filePath = path.resolve(__dirname, `../models/dynamic/${componentId}.model.js`)
        // await writeFile(filePath, fileSource)
      }


      if (Array.isArray(components)) {
        console.log(components)
      } else {
        const componentName = components.name
        ctx.status = 201
        ctx.body = await parseAndSaveComponentSchema(componentName)
      }
    } catch (e) {
      ctx.body = e.toString()
      ctx.status = 500
    }
  }
}

function removeExtensions(str) {
  if (!str) return str
  return str.replace(/\..+$/, '')
}

function loadComponent(componentName) {
  const filePath = `${blocksDir}/${componentName}`
  return readFile(filePath, 'utf-8')
}

function getComponentProps(source) {
  // parse component source
  const result = compiler.parseComponent(source, { pad: 'space' })
  // get just script
  const scriptSource = result.script.content
    .replace(/\n+/gm, '')

  if (!scriptSource) {
    return
  }

  // replace export default construction to return
  const helperFunction = new Function(scriptSource.replace('export default', 'return '))

  // extract props data
  const { props } = helperFunction()
  return props
}

function createMongoSchemaDraft(props) {
  const schema = {}

  if (Array.isArray(props)) {
    props.reduce((acc, prop) => {
      acc[prop] = {
        type: 'String',
        default: prop + ' lorem ipsum'
      }

      return acc
    }, schema)
  } else {
    Object.keys(props)
      .reduce((acc, prop) => {
        const item = props[prop]

        if (isFunction(item)) {
          acc[prop] = item()
          return acc
        }

        if (item.hasOwnProperty('default')) {
          if (isFunction(item.default)) {
            acc[prop] = item.default()
            return acc
          }

          acc[prop] = item.default
          return acc
        }

        acc[prop] = item.type()
        return acc
      }, schema)
  }

  return schema
}


module.exports = BlocksController

