const mongoose = require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose')
const collection = 'accounts'

const AccountSchema = mongoose.Schema({
  email: String
}, {collection})

AccountSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('Account', AccountSchema)
