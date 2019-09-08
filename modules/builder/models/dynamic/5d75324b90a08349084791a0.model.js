
        const { Schema, model } = require('mongoose')
        const createSchema = require('../../utils/create-schema.js')
        
        const schema = new Schema(createSchema('{"title":{"type":"String","default":"title lorem ipsum"},"description":{"type":"String","default":"description lorem ipsum"},"text":{"type":"String","default":"text lorem ipsum"},"componentId":{"type":"ObjectId","default":"5d75324b90a08349084791a0"},"componentName":{"type":"String","default":"SectionWelcome"}}'))
        module.exports = model('5d75324b90a08349084791a0', schema)
        