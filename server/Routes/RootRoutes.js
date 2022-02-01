const router = require("express").Router();
const RootController = require("../Controllers/RootController");

router.post("/submit", RootController.postSubmit);

export default router;