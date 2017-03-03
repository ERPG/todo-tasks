const Task = require('../../../../models/Task')

module.exports = (req, res) => {
  const {id} = req.params
  const updatedAt = Date.now()

  let {title, done} = req.body
  let update = {}
  if (done === 'true') {
    update.done = true
    update.updatedAt = updatedAt
  }
  if (title) {
    update.title = title
  }

  Task
    .findByIdAndUpdate(id, update)
    .then(task => res.status(200).json(task))
    .catch(err => res.status(500).json(err))
}
