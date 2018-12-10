const express = require("express");
    const router = express.Router();

    router.get("/", function(req, res, next) {
      res.render("teamBuilding", { title: "teamBuilding" });
    });
    module.exports = router;