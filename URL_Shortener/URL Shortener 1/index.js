const express = require("express");
const app = express();
const db = require("./database").connectDB;
db();
app.use(express.json());
app.listen(process.env.PORT,() => {
    console.log('listening on part: ${process.env.PORT}$');
});