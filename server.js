var express = require('express')
var fs = require('fs')
var https = require('https')
var path = require('path')
var pathMatch = require('path-match')
var route = pathMatch()
var opener = require('opener')
var { parse } = require('url')

var app = express()
var port = parseInt(process.env.PORT, 10) || 9000
var publicdir = __dirname + '/src'

app.use(function(req, res, next) {
  var { pathname, query } = parse(req.url, true)
  var matchWithAccountNo = route('/accounts/savings/:accountNo')
  var matchWithTransaction = route('/accounts/savings/:accountNo/transactions')
  var matchWithStatements = route('/accounts/savings/:accountNo/statements')
  var matchWithStatementsId = route('/accounts/savings/:accountNo/statements/:id')
  var matchAccountNo = matchWithAccountNo(pathname)
  var matchTransaction = matchWithTransaction(pathname)
  var matchStatements = matchWithStatements(pathname)
  var matchStatementsId = matchWithStatementsId(pathname)

  if (
    matchAccountNo === false &&
    matchTransaction === false &&
    matchStatements === false &&
    matchStatementsId === false
  ) {
    if (req.path.indexOf('.') === -1) {
      var file = publicdir + req.path + '.html'

      if (req.path)
        fs.exists(file, function(exists) {
          if (exists) req.url += '.html'
          next()
        })
    } else next()
  } else {
    if (matchAccountNo) {
      req.url = '/accounts/savings/[accountNo].html'
      next()
    } else if (matchTransaction) {
      req.url = '/accounts/savings/[accountNo]/transactions.html'
      next()
    } else if (matchStatements) {
      req.url = '/accounts/savings/[accountNo]/statements.html'
      next()
    } else if (matchStatementsId) {
      req.url = '/accounts/savings/[accountNo]/statements/[id].html'
      next()
    }
  }
})

app.use(express.static(publicdir))

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
