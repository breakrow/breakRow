const express = require('express');
const router  = express.Router();
const Usert = require('../models/User')


const isAuth = (req, res, next) => {
  if(req.isAuthenticated()){
    next();
  }else {
    res.redirect("/auth/login")
  }
};



router.get('/', isAuth, (req, res) => {
  const {user} = req
  res.render('profile',{user});
});


router.get("/:id/queue", isAuth, (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      res.render("queue", { user });
    })
    .catch(err => {
      res.render("queue", { err });
    });
});
module.exports = router;
