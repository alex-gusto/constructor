const mongoose = require('mongoose')

module.exports = () => {
  require('./models/articles.model')

  // TODO: add auto-loader if modules model
  require('./modules/builder/models/blocks.model')
  require('./modules/builder/models/pages.model')

  return mongoose.createConnection(
    'mongodb://alexgusto:TQKrG6R2pYNYRAm@ds032887.mlab.com:32887/vue', { useNewUrlParser: true, useFindAndModify: false },
  )
}
