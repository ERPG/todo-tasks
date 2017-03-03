const Task = require('../../../../models/Task')

module.exports = (req, res) => {
  const {user} = req
  const id = user._id
  Task
    .find({user_id: id, done: false})
    .then(task => res.render('tasks', {
      user: user,
      section: 'tasks',
      tasks: task
    }))
    .catch(err => res.status(500).json(err))
}
