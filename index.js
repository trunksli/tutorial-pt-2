const express = require('express')
const app = express()
app.get('/', (req,res) => {
  res.send('hello world local')
})

app.listen(3000, () => console.log('Server locally running on port 3000'))
