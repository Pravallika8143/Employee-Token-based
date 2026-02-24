const express = require("express");
const { loginUser, logoutUser } = require("./userController");
const { verifyToken } = require("../middlewares/auth");
const router = express.Router();

router.post("/login",loginUser);
router.post("/logout",verifyToken,logoutUser)

module.exports = router;