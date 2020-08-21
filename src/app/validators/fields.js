
function isFilled(req, res, next) {
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == "" && req.body[key] != "is_admin") {
      
      req.session.error = 'Por favor, preencher todos os campos.'
      req.session.user = req.body
      return res.redirect('back')
    }
  }

  next()
}

module.exports = {
  isFilled
}