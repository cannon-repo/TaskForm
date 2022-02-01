const router = require("express").Router();
const RootController = require("../Controllers/RootController");

router.post("/submit", RootController.postSubmit);

module.exports = router;