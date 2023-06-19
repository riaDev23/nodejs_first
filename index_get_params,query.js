const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user/:id', (req, res) => {
  // const q = req.params
  // console.log(q)
  const q = req.query
  console.log(q)
  console.log(q.name)
  console.log(q.age)
  
  res.json({'sound': q.name})
})

app.get('/cat', (req, res) => {
  res.json({'sound': '냐옹'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})