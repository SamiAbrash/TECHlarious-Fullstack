const Payment = require("../models/paymentModel");

const payment = async (req,res) => {
    try{
        const {userId, totalAmount} = req.body;
        const payment = Payment.create({
            userId,
            totalAmount
        });
        await payment.save();
        
        res.status(200).json({message: "payment successful"});
    }catch(error){
        console.log(error);
    }
    

};