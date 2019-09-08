const { db } = require('@db')
const path = require('path')
const Controller = require('~/controllers/abstract.controller.js')


const Model = db.model('Pages')

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
      ctx.body = e
      ctx.status = 500
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
        const [id, data] = this.blocks[this.index]
        let block

        try {
          const modelPath = path.resolve(__dirname, `../models/dynamic/${id}.model.js`)
          const model = require(modelPath)
          block = new model(data)
        } catch (e) {
          console.log(e)
        }
        this.index++
        return {
          done: false,
          value: block
        }
      } else {
        delete this.index
        return {
          done: true
        }
      }
    }
  }

  for (let block of obj) {
    const { _id } = await block.save()
    savedBlocks.push({
      dynamicComponentId: _id
    })
  }

  return savedBlocks
}
