const express = require("express");
    const router = express.Router();

    router.get("/", function(req, res, next) {
      res.render("gallery", { title: "gallery" });
    });
    module.exports = router;