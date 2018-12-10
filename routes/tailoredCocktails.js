const express = require("express");
    const router = express.Router();

    router.get("/", function(req, res, next) {
      res.render("tailoredCocktails", { title: "tailoredCocktails" });
    });
    module.exports = router;