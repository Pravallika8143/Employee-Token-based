const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const cors = require("cors");
const jwt = require("jsonwebtoken");
const userRoutes = require("../backend/user/userRoutes")
const employeeRoutes = require("../backend/employee/employeeRoutes")
dotenv.config();
connectDB();

const app =  express();
app.use(express.json());
app.use(cors());

app.use("/",userRoutes);
app.use("/emp",employeeRoutes)

app.listen(3900,()=>{
    console.log("Server Running on 3900")
})