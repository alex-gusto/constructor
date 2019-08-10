const { Schema, model } = require('mongoose')

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    alias: {
        type: String,
        required: true
    },
    content: String,
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateUpdated: {
        type: Date,
        default: Date.now
    }
})

model('Article', articleSchema)