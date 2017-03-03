const Account = require('../../../models/Account')

module.exports = (req, res, next) => {
  const { username, password, email } = req.body
  const account = new Account({ username, email })

  Account.register(account, password, function (err) {
    if (err) return next(err)
    res.redirect('/')
  })
}
