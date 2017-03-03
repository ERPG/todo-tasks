const express = require('express')
const Router = express.Router()
const getBodyParams = require('../middlewares/getBodyParams')

const authRoute = require('./auth')
const adminRoute = require('./admin')

Router
  .use(getBodyParams)
  .use(authRoute)
  .use(adminRoute)

module.exports = Router
