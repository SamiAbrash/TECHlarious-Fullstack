const mongoose = require('mongoose');

const medicineModel = new mongoose.Schema({

    name : {
        type : String,
        required : [true,"Please enter Medicine name"],
        trim : true
    },

    description : {
        type : String,
        required : [true,"Please enter Medicine description"],
        trim : true
    },

    quantity : {
        type : Number,
        required : [true,"Please enter quantity available"],
        trim : true,
        min : 0
    },

    manufacturer : {
        type : String,
        required : [true,"Please enter Medicine's manufacturer"],
        trim : true
    },

    price : {
        type : Number,
        required : [true,"Please enter Medicine pricing"],
        trim : true,
        min : 0
    },

    image : {
        type : String
    },

} , { timestamps : true } );

module.exports = mongoose.model("Medicine",medicineModel);