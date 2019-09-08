
        const { Schema, model } = require('mongoose')
        const createSchema = require('../../utils/create-schema.js')
        
        const schema = new Schema(createSchema('{"title":{"type":"String","default":"title lorem ipsum"},"content":{"type":"String","default":"content lorem ipsum"},"componentId":{"type":"ObjectId","default":"5d75320ea21227467c7e5586"},"componentName":{"type":"String","default":"SectionContent"}}'))
        module.exports = model('5d75320ea21227467c7e5586', schema)
        