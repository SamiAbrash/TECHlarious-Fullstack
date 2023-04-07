const express = require('express');
const app = express();
const db = require("./database").connectDB;

const userRouter = require("./routers/userRouter");
const medicineRouter = require("./routers/medicineRouter");
const cartRouter = require("./routers/cartRouter");
const orderRouter = require("./routers/orderRouter");

db();

app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/med", medicineRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);

// http://127.0.0.1:3000/api/registration/register
// http://127.0.0.1:3000/api/registration/login

// http://127.0.0.1:3000/api/med/newmed

app.listen(3000, () => {
    console.log("listening on port 3000");
});