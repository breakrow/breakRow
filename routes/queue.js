const express = require("express")
const router = express.Router();

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()){
    next();
  }else {
    res.redirect("/auth/login")
  }
};


router.get("/queue" , isAuth, (req,res) => {
  res.render("queue")
})

module.exports = router;