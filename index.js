// EXPRESS
const express = require('express')
const app = express()
const port = 3000

// CORS
var cors = require('cors')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/sound/:name', (req, res) => {
  const { name } = req.params

  if(name == 'dog') {
    res.json({'sound': '멍멍'})
  } else if(name == 'cat') {
    res.json({'sound': '냐옹'})
  } else if(name == 'pig') {
    res.json({'sound': '꿀꿀'})
  } else {
    res.json({'sound': '???동물이아닌듯'})
  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})