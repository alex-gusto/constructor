const mongoose = require('mongoose')

module.exports = function () {
    require('./models/articles.model')

    return mongoose.createConnection('mongodb://alexgusto:TQKrG6R2pYNYRAm@ds032887.mlab.com:32887/vue')
}