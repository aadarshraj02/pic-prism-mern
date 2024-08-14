const { login, signup, refresh } = require("../controllers/authController");

const router = require("express").Router();
router.post("/login", login);
router.post("/signup", signup);
router.get("/refresh", refresh);

module.exports = router;
