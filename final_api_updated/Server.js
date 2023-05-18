const express = require('express');
const mongoose = require('mongoose');

const userRouter = require("./routers/userRouter");
const medicineRouter = require("./routers/medicineRouter");
const cartRouter = require("./routers/cartRouter");
const orderRouter = require("./routers/orderRouter");

require("dotenv").config();

const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_URL).then(()=> console.log("Connected.")).catch((erro)=> console.log(error));

app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/med", medicineRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);

app.listen(PORT,()=> console.log("Server running on Port " +PORT));