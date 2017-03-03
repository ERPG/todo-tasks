const express = require('express')
const Router = express.Router()

const isLoggedIn = require('../auth/handlers/isLoggedIn')
const adminClientsRoute = require('./tasks')
const adminClientRoute = require('./task')

Router
  .use('/tasks', isLoggedIn, adminClientsRoute)
  .use('/task', isLoggedIn, adminClientRoute)

module.exports = Router
