const express = require("express")
const router = express.Router();

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()){
    next();
  }else {
    res.redirect("/auth/login")
  }
};


router.get("/", isAuth, (req, res) => {
  res.render("queue")
  // let date = new Date() // current Id
  // const { id } = req.params;
  // User.findById(id, date)
  //   .then(user => {
  //     res.render("queue", { user });
  //   })
  //   .catch(err => {
  //     res.render("queue", { err });
  //   });
});


module.exports = router;