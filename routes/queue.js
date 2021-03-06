const express = require("express");
const router = express.Router();
const User = require('../models/User'); // It refers to Company
const Customer = require('../models/Customer');
const uploader = require("../helpers/multer");
const helpers = require("../helpers/function");
const Business = require("../models/Business");

const isAuth = (req, res, next) => {
  if(req.isAuthenticated()){
    next();
  }else {
    res.redirect("/auth/login")
  }
};


// show queue for an authenticated user (company)
router.get("/", isAuth, (req, res, next) => {
  const {user} = req;
  Customer.find({businessID: user._id})
    .then(customers => {
      res.render("queue" , {customers});
    })
    .catch(err => {
      res.render('queue', { err });
    });
});

router.get('/add',isAuth,(req,res) =>{
  res.render('queue')
});


router.post("/add", isAuth, (req, res) => {
  let {_id:businessID} = req.user;
  customer = { businessID, ...req.body };
  console.log(customer);
  Customer.create(customer)
    .then(() => {
      res.redirect("/queue");
    })
    .catch(err => {
      res.render("/");
    });
});

module.exports = router;