const express = require("express");
const router = express.Router();

router.get("/", function(req, res, next) {
  res.render("mobileCocktail", { title: "mobileCocktails" });
});
module.exports = router;
