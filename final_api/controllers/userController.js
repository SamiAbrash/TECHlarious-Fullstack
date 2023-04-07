const User = require("../models/userModel");
const validator = require('validator');
const jwt = require('jsonwebtoken');
const {promisify} = require('util');

const signToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES_IN,});
};

const createSendToken = (user,statusCode,res,msg) => {
    const token = signToken(user._id);

    res.status(statusCode).json({
        status: "success",
        token,
        data: {
            message: msg,
            user,
        },
    });
};

const registerUser = async (req,res) => {
    try{
        const {fname, lname, username, email, password, address} = req.body;
        if (!validator.isEmail(email)){
            return res.status(400).json({message:"invalid email"});
        }

        const user = await User.findOne({
            $or : [
                    {username},
                    {email}
                ]
            });
        if (user){
            return res.status(409).json( { message : "User already exists" } );
        }

        const newUser = await User.create({
            fname,
            lname,
            username,
            email,
            password,
            address
        });
        
        let msg = "User created successfully";
        createSendToken(newUser,201,res,msg);

    }catch(error){
        console.log(error);
    }
};

// login to existing user:
const loginUser = async (req,res) => {
    try{
        const {email, password, username} = req.body;

        if (!validator.isEmail(email)){
            return res.status(400).json({message:"invalid email"});
        }

        const user = await User.findOne({email});

        if (!user){
            return res.status(404).json({message : "User does not exist"});
        }
        
        const match = await user.comparePassword(password);
        if(!match){
            return res.status(401).json({message:"incorrect password"});
        }

        let msg = "You are logged in successfully";
        createSendToken(user,200,res,msg);

    }catch(error){
        console.log(error);
    }
};

// to get user profile information:
const getUserProfile = async (req,res) => {
    try{
        const user = await User.findById(req.params.id);

        if (!user){
            return res.status(404).json({message:"User not found"});
        }
        
        res.status(201).json({data : user});

    }catch(error){
        console.log(error);
    }
};

// to update user profile information:
const updateUserProfile = async (req,res) => {
    try{
        const {email,address} = req.body;
        const updatedUser = await User.findByIdAndUpdate
        (
            req.params.id,
            { email, address },  
            { new : true }  // ask
        );
        
        if (!updatedUser){
            return res.status(404).json({message : "User not found"});
        }
        
        res.status(200).json({message : "Profile updated successfully"});

    }catch(error){
        console.log(error);
    }
};

// get all users in db
const getAllUsers = async (req,res) => {
    try{
        const users = await User.find();
        if (users.length > 0){
            return res.status(200).json({users});
        }
        else {
            return res.status(404).json({message:"Users do not exist"})
        }
    }catch(e){
        console.log(e);
    }
}

const protect = async (req,res) => {
    try{
        // 1 check if token still exists
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
            token = req.headers.authorization.split(" ")[1];
        }
        if (!token){
            return res.status(401).json({message:"You are not logged in. Login to get access"})
        }

        // 2 verify the token
        let decoded;
        try{
            decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET)
        }catch(error){
            if (error === "JsonWebTokenError"){
                return res.status(401).json({message:"Invalid token, login again"});
            }
            else if (error.name === "TokenExpiredError"){
                return res.status(401).json({message:"Your session token has expired, please login again"});
            }
        }

        // 3 check if the token owner exists
        const currentUser = await User.findById(decoded.id);
        if (!currentUser){
            return res.status(401).json({message:"the user belonging to this session no longer exists"});
        }

        // 4 check if the owner changed the password after the token was created
        // iat: time where token was issued
        // exp: time where the token will expire
        if (currentUser.passwordChangedAfterTokenIssued(decoded.iat)){
            return res.status(401).json({message:"Your password has been changed. Login again."});
        }

        // 5 if everything is ok add the user to all the requests (req.uesr = currentUser)
        req.user = currentUser;
        next();

    }catch(error){
        console.log(error);
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile,
    updateUserProfile,
    getAllUsers,
    protect
};