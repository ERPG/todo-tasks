const Task = require('../../../../models/Task')

module.exports = (req, res) => {
  const {user} = req
  const id = user._id
  Task
    .find({user_id: id, done: true})
    .then(task => res.render('done', {
      user: user,
      section: 'done',
      tasks: task
    }))
    .catch(err => res.status(500).json(err))
}
