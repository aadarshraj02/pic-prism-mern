const { login } = require("../controllers/authController");

const router = require("express").Router();
router.get("/login", login);

module.exports = router;
