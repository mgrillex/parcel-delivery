var express = require("express");
var router = express.Router();
const visitorController = require("../controllers/visitorController");

/* GET home page. */
router.get("/", visitorController.home);
router.get("/sign_up", visitorController.sign_up);
router.get("/sign_in", visitorController.sign_in);
// router.get("/one", visitorController.one_post);

module.exports = router;
