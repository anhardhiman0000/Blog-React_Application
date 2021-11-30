const router = require("express").Router();

const id = require("../controller/controlleruser");

router.get("/", id.userdetails);
router.post("/createuser", id.createuser);
router.put("/updateuser", id.updateuser);
router.delete("/deleteuser", id.deleteuser);

module.exports = router;
