const express = require('express')
const mongoose = require('mongoose')
const app = express()

const getRoutes = require('./app/routes')

const urlDB = 'mongodb://localhost:27017/todo_tasks'
const PORT = 3000

mongoose.Promise = global.Promise
mongoose.connect(urlDB)

app.locals.moment = require('moment')
app
  .set('view engine', 'pug')
  .use(express.static('public'))
  .use(getRoutes)
  .listen(PORT, () => console.log(`Magic happens on Port ${PORT}...`))
