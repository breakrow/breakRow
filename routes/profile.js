const express = require("express");
const router = express.Router();
const User = require("../models/User");
const uploader = require("../helpers/multer");
const helpers = require("../helpers/function");
const Business = require("../models/Business");


router.get("/", helpers.isAuth, (req, res) => {
  const { user } = req;
  Business.find({ owner: user._id }).then(businesses => {
    res.render("profile", { user, businesses });
  });
});

router.get("/:id/edit", helpers.isAuth, (req, res) => {
  const { id } = req.params;
  User.findById(id)
    .then(user => {
      res.render("profile-edit", { user });
    })
    .catch(err => {
      res.render("profile-edit", { err });
    });
});

router.post(
  "/:id/edit",
  helpers.isAuth,
  uploader.single("image"),
  (req, res) => {
    const { id: _id } = req.params;
    const { email } = req.user;
    const image = req.file ? req.file.url : undefined;
    const user = image ? { ...req.body, image } : req.body;
    User.findOneAndUpdate({ _id, email }, { $set: user })
      .then(() => {
        res.redirect("/profile");
      })
      .catch(err => {
        res.render("profile-edit", { err });
      });
  }
);

module.exports = router;
