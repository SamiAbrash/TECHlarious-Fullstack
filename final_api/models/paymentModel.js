const mongoose = require('mongoose');

const paymentModel = new mongoose.Schema({
    
    user :{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Order"
        },

    totalAmount : {
        type : Number,
        required : true,
        trim : true
    },
    method : {
        type : String,
        required : true,
        trim : true
    },
} , { timestamps : true } );

module.exports = mongoose.models("Payment",paymentModel);