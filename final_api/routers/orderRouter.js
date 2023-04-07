const express = require('express');
const router = express.Router();
const orderController = require("../controllers/orderController");

router.post("/placeorder/:id", orderController.placeOrder);
router.get("/getorders", orderController.getAllOrders);
router.get("/vieworder", orderController.viewOrder);
router.delete("/deleteorder", orderController.deleteOrder);

module.exports = router;

/*
placeOrder
getAllOrders
viewOrder
deleteOrder
*/