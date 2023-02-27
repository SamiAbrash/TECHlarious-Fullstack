const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    orgURL:{
        type:String,
        required: [true,"enter the url"],
        trim:true
    },
    idURL:{
        type:String,
        required:[true,"enter new url code/id"],
        trim:true
    },
    newURL:{
        type: String,
        trim:true
    }
},{timestamps:true});


module.exports = mongoose.model("User",userSchema);