const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({

    fname : {
        type : String,
        required : [true,"Please enter your First Name"],
        trime : true
    },

    lname : {
        type : String,
        required : [true,"Please enter your Last Name"],
        trim : true
    },

    username : {
        type : String,
        required : [true,"Please enter your Username"],
        trim : true
    },
    
    email : {
        type : String,
        required : [true,"Please enter your Email"],
        trim : true
    },
    
    password : {
        type : String,
        trim : true,
        required : [true,"Please enter you Password"]
    },
    
    address : {
        type : String,
        required : [true,"Please enter your Address Location"],
        trim : true
    },

    orders : [
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Order"
        }
    ],
    
    cart : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "Cart"
    }],

    passwordChangedAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date,
    
} , { timestamps : true } );

userSchema.pre('save', async function(next){
    if (!this.isModified('password')){
        return next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
});

userSchema.methods.comparePassword = async function(Password){
    return await bcrypt.compare(Password,this.password);
};

userSchema.methods.generatePasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString("hex");
    this.passwordResetToken = crypto.createHash("sha256").update(resetToken).digest("hex");
    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
}

userSchema.methods.passwordChangedAfterTokenIssued = function(JWTTimestamp){
    if (this.passwordChangedAt){
        const passwordChangeTime = parseInt(this.passwordChangedAt.getTime()/1000,10);
        
        return passwordChangeTime > JWTTimestamp
    }
    return false;
}

module.exports = mongoose.model("User",userSchema);