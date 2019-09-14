const { db } = require('~db')
const path = require('path')
const Controller = require('~/controllers/abstract.controller.js')
const createModel = require('../utils/create-model')
const createSchema = require('../utils/create-schema')
const eventBus = require('~/utils/event-bus')

const Model = db.model('Pages')
const BlocksModel = db.model('Blocks')

class PageController extends Controller {
  constructor() {
    super(Model)
  }

  async create(ctx) {
    const { body } = ctx.request
    const page = new this.model({
      ...body,
      blocks: await saveBlocksData(body)
    })

    try {
      ctx.body = await page.save()
    } catch (e) {
      Controller.throwError(ctx, { body: e.toString() })
    }
  }
}

module.exports = PageController

async function saveBlocksData({ blocks }) {
  const savedBlocks = []
  const obj = {
    blocks: Object.entries(blocks),

    [Symbol.iterator]() {
      return this
    },

    next() {
      if (!this.hasOwnProperty('index')) {
        this.index = 0
      }

      if (this.index < this.blocks.length) {
        const value = this.blocks[this.index]
        this.index++
        return {
          done: false,
          value
        }
      } else {
        delete this.index
        return {
          done: true
        }
      }
    }
  }

  for (let [id, data] of obj) {
    const currentModels = db.modelNames()
    let blockModel

    if (currentModels.includes(id)) {
      blockModel = db.model(id)
    } else {
      const { schemaDraft } = await BlocksModel.findOne({ _id: id })
      schemaDraft.blockId = {
        type: 'ObjectId',
        default: id
      }

      const schema = createSchema(schemaDraft)
      blockModel = createModel(id, schema)
    }


    const block = new blockModel(data)
    const { _id } = await block.save()

    savedBlocks.push({
      dynamicBlockId: _id
    })
  }

  return savedBlocks
}
