const express = require('express');
const router = express.Router();

const userController = require("../controllers/userController");

router.post("/register",userController.registerUser);
router.post("/login",userController.loginUser);
router.get("/profile/:id", userController.getUserProfile);
router.put("/updateprofile/:id", userController.updateUserProfile);
router.get("/getusers", userController.protect, userController.getAllUsers);

module.exports = router;