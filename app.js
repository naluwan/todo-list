const express = require('express')
const mongoose = require('mongoose')
const app = express()

const port = 3000

mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: trueç })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

app.get('/', (req, res) => {
  res.send('This will be a todo-list website by Express')
})

app.listen(port, () => {
  console.log(`Express is rinning on http://localhotst:${port}`)
})