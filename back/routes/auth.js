const express = require("express");
const router = express.Router();
const { signup, login, logout, userById } = require("../controllers/authController");

router.post("/signup", signup);
router.post("/login", login);
router.get("/logout", logout);

router.param('userId', userById)

module.exports = router; 