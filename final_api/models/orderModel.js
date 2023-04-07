const mongoose = require('mongoose');

const orderModel = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required:true
    },
    cartId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Medicine"
    },

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
    payment : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Payment'
    }
} , { timestamps : true } );

module.exports = mongoose.model("Order",orderModel);