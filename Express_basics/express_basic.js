const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})
// The Port is 3000 where we are listening requests
app.listen(3000,() => {
    console.log("server is started")
})