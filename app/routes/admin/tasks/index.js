const express = require('express')
const Router = express.Router()

const getPending = require('./handlers/getPending')
const getCompleted = require('./handlers/getCompleted')
const addTask = require('./handlers/addTask')

Router
  .get('/', getPending)
  .post('/', addTask)
  .get('/done', getCompleted)

module.exports = Router
