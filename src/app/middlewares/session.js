function onlyUsers(req, res, next) {
  
  if(!req.session.userId)
    return res.redirect('/admin/users/login')

  next()
}

function isLoggedRedirectToProfile(req, res, next) {
  
  if(req.session.userId)
    return res.redirect('/admin/users/profile')

  next()
}

function isAdmin (req, res, next) {

  if(!req.session.isAdmin) {
    req.session.error = 'Você não tem previlégios para executar esta ação.'
    return res.redirect(`${req.headers.referer}`)
  }

  next()
}

module.exports = {
  onlyUsers,
  isLoggedRedirectToProfile,
  isAdmin
}