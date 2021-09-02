const express = require('express')
const morgan = require('morgan')
const path = require('path');
const session = require('express-session')
const http = require('http')
const app = express()

const server = http.createServer(app)
require('./socket')({ server })

// SETTINGS
app.set('port', process.env.PORT || 1515)
app.set('views', path.join(__dirname + '/../views'))
app.set('view engine', 'pug')

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'josekeyword',
    resave: false,
    saveUninitialized: false
}))

app.use((req, res, next) => {
    res.locals.usernames = ['joseflores']
    next()
})

// ROUTES
app.use(require('../routes/index.routes'))

// STATIC FILES
app.use('/public', express.static(path.join(__dirname, '../statics')))

module.exports = { server, app }