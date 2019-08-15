const mongoose = require('mongoose')

module.exports = () => {
  require('./models/articles.model')
  require('./modules/builder/models/block.model')

  return mongoose.createConnection(
    'mongodb://alexgusto:TQKrG6R2pYNYRAm@ds032887.mlab.com:32887/vue', { useNewUrlParser: true }
  )
}
