const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('This will be a todo-list website by Express')
})

app.listen(port, () => {
  console.log(`Express is rinning on http://localhotst:${port}`)
})