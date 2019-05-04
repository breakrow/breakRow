
const express = require("express");
const router = express.Router();
const Business = require("../models/Business");
const uploader = require("../helpers/multer");
const helpers = require("../helpers/function");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});




module.exports = router;
