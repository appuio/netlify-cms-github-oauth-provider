require('dotenv').config({ silent: true })
const express = require('express')
const middleWarez = require('./index.js')
const port = process.env.PORT || 3000
const host = process.env.HOST || '127.0.0.1'

const app = express()

// Initial page redirecting to Github
app.get('/auth', middleWarez.auth)

// Callback service parsing the authorization token
// and asking for the access token
app.get('/callback', middleWarez.callback)

app.get('/success', middleWarez.success)
app.get('/', middleWarez.index)

app.listen(port, host, () => {
  console.log("gandalf is walkin' on port " + port)
})
