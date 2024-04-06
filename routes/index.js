var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Mi Proyecto",
    miCedula: 25074591,
    miNombre: "Genaro Gonzalez",
  });
});

module.exports = router;
