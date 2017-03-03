const express = require('express')
const Router = express.Router()

const getById = require('./handlers/getById.js')
const deleteById = require('./handlers/deleteById')
const updateById = require('./handlers/updateById')

Router
  .get('/:id', getById)
  .delete('/:id', deleteById)
  .put('/:id', updateById)

module.exports = Router
