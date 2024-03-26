var express = require("express");
var router = express.Router();
const operController = require("../controllers/operController");

router.get("/trucks", operController.all);
router.get("/add", operController.addParcel);
router.post("/add", operController.addParcel_post);

router.get("/parcels", operController.allParcel);
router.get("/view", operController.view);
router.get("/recieved", operController.recieved);
router.get("/search", operController.search);

module.exports = router;
