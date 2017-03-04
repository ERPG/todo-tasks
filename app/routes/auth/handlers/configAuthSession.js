const express = require('express')
const Router = express.Router()
// Session
const passport = require('passport')
const LocalStrategy = require('passport-local')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const Account = require('../models/Account')

Router
  .use(cookieParser())
  .use(session({secret: 'supersecretoimposibilisimodesaberjamas',
    resave: true,
    saveUninitialized: true
  }))
  .use(passport.initialize())
  .use(passport.session())

passport.use(new LocalStrategy(Account.authenticate()))
passport.serializeUser(Account.serializeUser())
passport.deserializeUser(Account.deserializeUser())

module.exports = Router
