var express = require('express')
var fs = require('fs')
var https = require('https')
var path = require('path')
var opener = require('opener')
var app = express()
var port = parseInt(process.env.PORT, 10) || 9000

app.use(express.static(path.join(__dirname, 'src')))

https
  .createServer(
    {
      key: fs.readFileSync('server.key'),
      cert: fs.readFileSync('server.cert')
    },
    app
  )
  .listen(port, () => {
    console.log('Example app listening on port ' + port + '! Go to https://localhost:' + port)
    opener('https://localhost:' + port)
  })
