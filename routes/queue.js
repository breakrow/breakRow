const express = require("express")
const router = express.Router();


router.get("/queue" , (req,res) => {
  res.render("queue")
})

