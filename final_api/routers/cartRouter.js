const express = require('express');
const router = express.Router();

const cartController = require("../controllers/cartController");

router.post("/addmedtocart", cartController.addMedicineToCart);
router.delete("/deletefromcart", cartController.deleteFromCart);
router.get("/viewcart", cartController.viewCart);

module.exports = router;