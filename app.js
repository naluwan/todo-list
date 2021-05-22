// require
const express = require('express')
const mongoose = require('mongoose')
const hbs = require('express-handlebars')
const Todo = require('./models/todo')
const app = express()

const port = 3000

// setting template engine
app.engine('hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

// setting mongodb connect
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})


// setting route
app.get('/', (req, res) => {
  // 拿到全部Todo資料
  Todo.find()
    .lean()
    .then(todos => res.render('index', { todos }))
    .catch(error => console.error(error))
})


// start Express server on localhost:3000
app.listen(port, () => {
  console.log(`Express is rinning on http://localhotst:${port}`)
})