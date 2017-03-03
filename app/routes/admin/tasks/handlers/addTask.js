const Task = require('../../../../models/Task')

module.exports = (req, res) => {
  const {user} = req
  const {title} = req.body
  const id = user._id
  const task = new Task({user_id: id, title})
  task.save()
    .then(task => res.status(200).redirect('/tasks'))
    .catch(err => res.status(500).json(err))
}
