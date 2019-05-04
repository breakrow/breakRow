
const express = require("express");
const router = express.Router();
const Business = require("../models/Business");
const uploader = require("../helpers/multer");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

module.exports = router;
