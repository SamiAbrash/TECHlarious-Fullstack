const express = require('express');
const router = express.Router();

const cartController = require("../controllers/cartController");
const {protect} = require('../controllers/userController');

router.post("/addmedtocart", protect, cartController.addMedicineToCart);
router.delete("/deletefromcart", protect, cartController.deleteFromCart);
router.get("/viewcart/:id", protect, cartController.viewCart);

module.exports = router;