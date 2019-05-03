const express = require("express"); 
const router = express.Router();
const User = require("../models/User");
const passport = require("passport");


router.get("/login", (req, res) =>{
  res.render("auth-form", {action:"Login"});
});


router.get("/register", (req, res) =>{
  res.render("auth-form");
});

router.post(
  "/login", 
  passport.authenticate("local", {
    successRedirect: "/profile", 
  failureRedirect: "/auth/login", 
  failWithError: true
  })
);


router.post("/register", (req, res) => {
  const { password } = req.body;
  
  User.register(req.body, password)
  .then(() => {
    //res.redirect("/auth/login");
    res.redirect("/profile");
  })
  .catch(err => {
    // console.log(err);
    res.render("auth-form", { err, action: "Register" });
  });
});

router.get("/logout", (req, res) => {
   req.logout();
   res.redirect("/auth/login");
});

module.exports = router;
