const Koa = require('koa')
const serve = require('koa-static')
// const {ApolloServer, gql} = require('apollo-server-koa')
const Users = require('./models/users')
const db = require('./mongo')()

const initApp = () => {
    const app = new Koa()

    require('./router')(app)
// server.applyMiddleware({app})

    // Object.keys(routes).forEach(route => {
    //     app.use(routes[route].routes())
    // })

    app
        .use(serve(__dirname + '/dist'))
        .listen({port: 4000}, () =>
            console.log(`🚀 Server ready at http://localhost:4000`)
        )
}

initApp()
// db.on('open', initApp)
// db.on('error', (e) => console.log(e))
