const userModel = require("./userModel");
const jwt = require("jsonwebtoken");

exports.loginUser = async(req,res) => {
    try{
    const {username , password} = req.body;
    const newUser = await userModel.create({username,password});
    await newUser.save();
    const token = jwt.sign({id:newUser._id},process.env.JWT_SECRET);
    res.json({
        message:"Login Successfull",
        token,
        user:newUser
    })
    }catch(err){
        res.json({message:err.message});
    }
}

exports.logoutUser = async(req,res)=>{
    try{
        const user = await userModel.findByIdAndDelete(req.params.id);
        user.token= null;
        await user.save();
        res.json({message:"Logout Successful"});
    }catch(err){
        res.json({message:"Server error"});
    }
}