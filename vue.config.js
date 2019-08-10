require('dotenv').config()

const apiProxy = {}
apiProxy[process.env.VUE_APP_API_PREFIX] = {
  target: `http://localhost:${process.env.SERVER_PORT}`,
}

module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: apiProxy,
  },
};
