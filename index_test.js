const express = require('express')
const app = express()
const port = 3000

var figlet = require("figlet");

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/dog', (req, res) => {
  res.json({'sound': '멍멍'})
})

app.get('/cat', (req, res) => {
  res.json({'sound': '냐옹'})
})

app.get('/figlet', (req, res) => {
  figlet("Hello World!!", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    res.send('<textarea cols="60" rows="10">' + data + '</textarea>')
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})