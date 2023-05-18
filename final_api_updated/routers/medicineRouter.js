const express = require('express');
const router = express.Router();
const medicineController = require("../controllers/medicineController");

router.post("/newmed", medicineController.newMedicine);
router.put("/updatemed/:id", medicineController.updateMedicine);
router.get("/viewmed/:id", medicineController.viewMedicine);
router.delete("/deletemed/:id", medicineController.deleteMedicine);
router.get("/getallmed", medicineController.getAllMedicines);
router.get("/searchmed", medicineController.searchMedicines)

http://127.0.0.1:3000/

/*
    newMedicine
    updateMedicine
    getAllMedicines
    viewMedicine
    deleteMedicine

*/

module.exports = router;