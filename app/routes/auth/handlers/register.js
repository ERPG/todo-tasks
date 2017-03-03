module.exports = (req, res) => {
  const {user} = req
  if (user) return res.redirect('/tasks')
  res.render('register')
}
