const express = require('express');
const router  = express.Router();
const User = require('../models/User');
const Queue = require('../models/Queue');

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()){
    next();
  }else {
    res.redirect("/auth/login")
  }
};



router.get('/', isAuth, (req, res) => {
  const {user} = req
  res.render("profile" ,{user})
});




module.exports = router;
