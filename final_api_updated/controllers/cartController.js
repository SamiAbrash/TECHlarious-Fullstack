const Cart = require("../models/cartModel");
const Medicine = require("../models/medicineModel");

const addMedicineToCart = async (req, res) => {
  try{
    const {userId, medicineId, quantity} = req.body;

    const medicine = await Medicine.findById(medicineId);
    if (!medicine){
      return res.status(404).json({message:"medicine not found"});
    }

    let cart = await Cart.findOne({user:userId});
    if (!cart){
      cart = new Cart({user:userId, medicines:[]});
    }

    const index = cart.medicines.findIndex((m)=>m.medicine.toString()===medicineId);
    if (index != -1){
      cart.medicines[index].quantity += quantity;
    }
    else{
      cart.medicines.push({medicine: medicineId, quantity});
    }
    await cart.save();
    res.status(200).json({message:"medicine added to cart", data: cart});
    
  }catch(error){
    console.log(error);
  }
};

// viewing user's cart
const viewCart = async (req,res) => {
    try{

      const cart = await Cart.findOne({ user: req.params.userId }).populate({
        path: 'medicines.medicine',
        select: 'name price',
      });
      
      if (!cart){
        return res.status(404).json({message:"cart not found"});
      }
      
      res.status(200).json({message:"cart found:",medicines: cart.medicines});

    }catch(error){
        console.log(error);
    }
};


// delete an item from cart
const deleteFromCart = async (req,res) => {
    try{
        const {userId, medId} = req.body;

        let cart = await Cart.findOne({user: userId});

        if (!cart){
          return res.status(404).json({message:"Cart not found"});
        }

        const index = cart.medicines.findIndex((m)=>m.medicine.toString()===medId);

        if (index === -1){
          return res.status(400).json({message:"medicine is not in cart"});
        }

        cart.medicines.splice(index,1);

        await cart.save();

        res.status(200).json({message:"medicine removed from cart", data: cart});

    }catch(error){
        console.log(error);
    }
};

module.exports = {
    addMedicineToCart,
    viewCart,
    deleteFromCart
};