const employeeModel = require("./employeeModel")
const jwt = require("jsonwebtoken");

exports.getAllEmployees = async (req,res)=> {
    try{
        const employees = await employeeModel.find({});
        res.json({
            success:true,
            employee:employees
        })
    }catch(err){
          res.json({
            success:false,
            message:"Server Error"
          })
    }
}

exports.addEmployee = async (req,res) => {
    try{
        const { username , salary } = req.body;
        const newEmployee = await employeeModel.create({
            username,salary
        });
        res.json({
            message:"Employee Added Successfully",
            employee:newEmployee
        })
    }catch(err){
        res.json({message:"Server Error"})
    }
}

exports.deleteEmployee = async (req,res) => {
    try{
        await employeeModel.findByIdAndDelete(req.params.id);
        res.json("Deleted Successfully");
    }catch(err){
        res.json("Unable to Delete")
    }
}