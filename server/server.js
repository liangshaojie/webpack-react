const express = require('express');
const fs = require('fs');
const path = require('path');
const favicon = require('serve-favicon')
const isDev = process.env.NODE_ENV === 'development'
const session =  require('express-session')
const bodyParser = require('body-parser')
const serverRender = require('./until/server-render')
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(session({
  maxAge: 10*60*1000,
  name: 'tid',
  resave: false,
  saveUninitialized: false,
  secret: 'react cnode class'
}))
app.use(favicon(path.join(__dirname,'../favicon.ico')))
app.use('/api/user',require('./until/handle-login'))
app.use('/api',require('./until/proxy'))

if (!isDev) {
  const serverEntry = require('../dist/server-entry')
  const template = fs.readFileSync(path.join(__dirname, '../dist/server.ejs'), 'utf8');
  app.use('/public', express.static(path.join(__dirname, '../dist')));
  app.get("*", function (req, res,next) {
    serverRender(serverEntry,template,req,res).catch(next)
  })
} else {
  const devStatic = require('./until/dev-statice.js')
  devStatic(app)
}
app.use(function (err,req,res,next) {
  console.log(err)
  res.status(500).send(err)
})

app.listen(3234, function () {
  console.log("server is listening on 3234")
})
