const express = require('express')
const Router = express.Router()
const configAuthSession = require('./handlers/configAuthSession')
const passport = require('passport')

const login = require('./handlers/login')
const postLogin = require('./handlers/postLogin')
const register = require('./handlers/register')
const postRegister = require('./handlers/postRegister')
const logout = require('./handlers/logout')

Router
  .use(configAuthSession)
  .get('/', login)
  .post('/login', passport.authenticate('local'), postLogin)
  .get('/register', register)
  .post('/register', postRegister)
  .get('/logout', logout)

module.exports = Router
