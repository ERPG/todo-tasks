const Task = require('../../../../models/Task')

module.exports = (req, res) => {
  Task
    .find()
    .then(task => res.json(task))
    .catch(err => res.status(500).json(err))
}
