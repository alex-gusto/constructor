require('dotenv').config()
const path = require('path')

const apiProxy = {}
apiProxy[process.env.VUE_APP_API_PREFIX] = {
  target: `http://localhost:${process.env.SERVER_PORT}`,
}

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: apiProxy,
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'views/admin'),
      },
    },
    entry: {
      app: './views/admin/main.js'
    }
  }
};
