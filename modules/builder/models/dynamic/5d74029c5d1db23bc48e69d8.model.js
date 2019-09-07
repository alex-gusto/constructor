
        const { Schema, model } = require('mongoose')
        const createSchema = require('../../utils/create-schema.js')
        
        const schema = new Schema(createSchema('{"componentId":{"type":"ObjectId","default":"5d74029c5d1db23bc48e69d8"},"componentName":{"type":"String","default":"SectionContent"},"title":{"type":"String","default":"title lorem ipsum"},"content":{"type":"String","default":"content lorem ipsum"}}'))
        module.exports = model('5d74029c5d1db23bc48e69d8', schema)
        