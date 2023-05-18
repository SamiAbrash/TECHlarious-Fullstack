const mongoose = require('mongoose');

const cartModel = new mongoose.Schema({
    user : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User"
    },
    medicines: [{
        medicine: {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Medicine"
        },

        quantity : {
        type : Number,
        required : true,
        default : 1,
        trim : true,
        min : 0
        }
    }]
} , { timestamps : true });

module.exports = mongoose.model("Cart",cartModel);