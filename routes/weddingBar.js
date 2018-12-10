const express = require("express");
    const router = express.Router();

    router.get("/", function(req, res, next) {
      res.render("weddingBar", { title: "weddingBar" });
    });
    module.exports = router;