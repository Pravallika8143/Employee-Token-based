const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    username :{
        type:String,
        required:true,
        unique:true
    },
    salary:{
        type:Number,
        required:true
    }
})

const employeeModel = mongoose.model("employee",employeeSchema);
module.exports = employeeModel;