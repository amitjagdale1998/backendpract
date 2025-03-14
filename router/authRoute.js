const { signup } = require("../controller/authController");
const router = require("express").Router();

// Corrected route path with leading "/"
router.route("/signup").post(signup);

module.exports = router;
