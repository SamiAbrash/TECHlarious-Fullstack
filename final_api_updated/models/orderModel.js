const mongoose = require('mongoose');

const orderModel = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true
    },
    medicines : [{
        medicineId:{
            type : mongoose.Schema.Types.ObjectId,
            ref : "Medicine"
        },
        quantity:{
            type:Number,
            required:true
        }
    }],

    status:{
        type:String,
        enum:['Pending','Completed','Cancelled'],
        default:'Pending'
    },

    totalPrice : {
        type : Number,
        trim : true,
        min : 0
    },
    payMethod : {
        type : String,
        required : [true,"Please choose how are you paying"],
        trim : true
    }
} , { timestamps : true } );

module.exports = mongoose.model("Order",orderModel);