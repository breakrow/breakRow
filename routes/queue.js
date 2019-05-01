const express = require("express")
const router = express.Router();
const User = require('../models/User') // It refers to Company
const Customer = require('../models/Customer') 

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()){
    next();
  }else {
    res.redirect("/auth/login")
  }
};


router.get("/:id", isAuth, (req, res) => {
  //res.render("queue")
  //let date = new Date() // current Id
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      //res.render("queue", { user });
      res.render("queue");
    })
    .catch(err => {
      res.render({ err });
    });
});



router.post("/add", isAuth, (req, res) => {
  let {_id:business} = req.user;
  customer = { business, ...req.body };
  console.log(customer)
  // Customer.create(customer)
  //   .then(() => {
  //     res.redirect("/queue");
  //   })
  //   .catch(err => {
  //     res.render("/profile", { err });
  //   });
});


module.exports = router;