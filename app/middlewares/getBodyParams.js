const express = require('express')
const bodyParser = require('body-parser')
const Router = express.Router()

Router
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())

module.exports = Router
