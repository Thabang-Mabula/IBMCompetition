'use strict'

let express = require('express')
let mainRouter = express.Router()
let app = express()
let path = require('path')

let topicsModel = require('../models/topicsModel')

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

mainRouter.get('/', function (req, res) {
  res.sendFile('/index.html', { root: req.app.get('views') })
  res.status(200)
})

mainRouter.post('/api/topics', function (req, res) {
  res.send(topicsModel.getTopicObject(req.body.topic))
})

module.exports = mainRouter
