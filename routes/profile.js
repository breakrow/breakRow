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




module.exports = router;
