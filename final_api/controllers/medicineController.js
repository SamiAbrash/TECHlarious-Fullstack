
const Medicine = require('../models/medicineModel');


// add a new medicine:
const newMedicine = async (req,res) => {
    try{
        const medicine = await Medicine.findOne({name : req.body.name}); // ask

        if (medicine){
            return res.status(400).json({message : "This medicine already exists"});
        }

        const newMedicine = await Medicine.create({
            name : req.body.name,
            description : req.body.description,
            quantity : req.body.quantity,
            manufacturer : req.body.manufacturer,
            price : req.body.price,
        });

        res.status(200).json({message : "Medicine added successfully"});

    }catch(error){
        console.log(error);
    }
};

// update an existing medicine:
const updateMedicine = async (req,res) => {
    try{
        const medicine = await Medicine.findByIdAndUpdate(
            { _id : req.params.id },
            {
                description : req.body.description,
                quantity : req.body.quantity,
                manufacturer : req.body.manufacturer,
                price : req.body.price,
            },
            { new : true }
        );

        if (!medicine){
            return res.status(404).json({message : "Medicine not found"});
        }

        res.status(200).json({message : "Medicine updated successfully"});

    }catch(error){
        console.log(error);
    }
};

// view one medicine:
const viewMedicine = async (req,res) => {
    try{
        const medicine = await Medicine.findById(req.params.id);

        if (!medicine){
            return res.status(404).json({message : "Medicine not found"});
        }

        res.status(200).json(medicine);

    }catch(error){
        console.log(error);
    }
};

// delete a medicine:
const deleteMedicine = async (req,res) => {
    try{
        const medicine = await Medicine.findByIdAndDelete(req.params.id);

        if (!medicine){
            return res.status(404).json({message : "Medicine not found"});
        }

        res.status(200).json({message : "MEdicine deleted successfully"});

    }catch(error){
        console.log(error);
    }

};

module.exports = {
    newMedicine,
    updateMedicine,
    viewMedicine,
    deleteMedicine,
}