const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.render("testimonials", { title: "testimonials" });
});
module.exports = router;
