const Task = require('../../../../models/Task')

module.exports = (req, res) => {
  const {status} = req.params

  let filter
  if (status === 'completed') {
    filter = true
  }
  if (status === 'pending') {
    filter = false
  }

  Task
    .find({done: filter})
    .then(task => res.json(task))
    .catch(err => res.status(500).json(err))
}
