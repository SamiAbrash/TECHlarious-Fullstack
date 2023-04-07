const Order = require("../models/orderModel");
const Cart = require("../models/cartModel");

// place an order
const placeOrder = async (req, res) => {
    try {
      const { userId, cartId, total } = req.body;
  
      const payment = new Payment({
        amount: total,
        status: 'pending',
      });
      await payment.save();
  
      const order = new Order({
        user: userId,
        cart: cartId,
        total: total,
        payment: payment._id,
      });
      await order.save();
  
      res.status(201).json(order);
      
    } catch (error) {
      console.error(error);
    }
  };
// view all orders 
const getAllOrders = async (req,res) => {
    try{
        const orders = await Order
        .find({})
        .populate('user', 'name email')
        .populate('medicines.medicine', 'name price image');

        res.status(200).json({ success: true, orders });
        
    }catch(error){
        console.log(error);
    }
};

// view one specific order: 
// same concept as view one medicine / user
const viewOrder = async (req,res) => {
    try{
        const order = await Order.findById(req.params.id);

        if (!order){
            return res.status(404).json({message : "order not found"});
        }

        res.status(201).json({order});

    }catch(error){
        console.log(error);
    }
};

// delete a speicif order where id is passed as parameter
const deleteOrder = async (req,res) => {
    try{
        const order = await findById(req.params.order);

        if (!order){
            return res.status(404).json({message : "order not found"});
        }

        await order.remove();

        res.status(201).json({message : "order deleted successfully"});

    }catch(error){
        console.log(error);
    }
};

module.exports = {
    placeOrder,
    getAllOrders,
    viewOrder,
    deleteOrder
};