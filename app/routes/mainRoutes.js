'use strict'

let express = require('express')
let mainRouter = express.Router()
let app = express()
let path = require('path')

let journeyContoller = require('../controllers/journeyController.js')

let bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json())

mainRouter.get('/', function (req, res) {
  // res.sendFile('/Car, Home & Business Insurance _ 1st for Women Insurance.html', { root: req.app.get('views') })
  res.render('Car, Home & Business Insurance _ 1st for Women Insurance.html', { /* data */ })
  res.status(200)
})

mainRouter.get('/the_journey', function (req, res) {
  // res.sendFile('/Car, Home & Business Insurance _ 1st for Women Insurance.html', { root: req.app.get('views') })
  res.render('journey.html', { /* data */ })
  res.status(200)
})

mainRouter.post('/api/send_message', function (req, res) {
  let response = journeyContoller.sendMessage(req.body.message)
  console.log('Asyn response: ' + response)
  res.send(response)
})

module.exports = mainRouter
