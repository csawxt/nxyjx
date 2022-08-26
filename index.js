const express = require('express')
const app = express()
const cors = require('cors')
const request = require("request");

app.use(cors())
app.use(express.urlencoded({ extended: false }))

const userRouter = require('./router/url')
app.use('/api', userRouter)


app.listen(80, function () {
  console.log('api server running at http://127.0.0.1:3007')
})


