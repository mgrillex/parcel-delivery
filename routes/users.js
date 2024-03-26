var express = require("express");
var router = express.Router();
const userController = require("../controllers/userController");

/* GET users listing. */
router.post("/sign_up", userController.sign_up);
router.post("/sign_in", userController.sign_in);
router.get("/sign_out", userController.sign_out);

module.exports = router;
