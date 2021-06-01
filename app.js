// require
const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const port = 3000

const routes = require('./routes')
require('./config/mongoose')

const app = express()

// setting template engine
app.engine('hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting app.use
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)

// start Express server on localhost:3000
app.listen(port, () => {
  console.log(`Express is rinning on http://localhotst:${port}`)
})