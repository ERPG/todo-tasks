const mongoose = require('mongoose')
const collection = 'tasks'

const TaskSchema = mongoose.Schema({
  user_id: {type: String, required: true},
  title: {type: String, required: true},
  done: {type: Boolean, default: false},
  createdAt: {type: Number, default: Date.now},
  updatedAt: Number
}, {collection})

module.exports = mongoose.model('Task', TaskSchema)
