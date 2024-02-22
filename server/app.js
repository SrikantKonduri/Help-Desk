const express = require('express')
const app = express()
const port = 8000

app.get('/register', (req, res) => {
  res.send('Registering')
}) 

app.get('/login', (req, res) => {
  res.send('Logging')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})