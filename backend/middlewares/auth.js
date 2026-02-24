const userModel = require("../user/userModel");
const jwt = require("jsonwebtoken");

exports.verifyToken = async (req,res,next) =>{
    const authHeader = req.headers.authorization;
    if(!authHeader){
       res.json({message:"No Token"});
    }
    const token = authHeader.split(" ")[1]
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        const user = await userModel.findById(decoded.id);
        if(!user){
           return res.json({message:"User Not Found"});
        }
        req.user = user;
        next();
    }catch(err){
       return res.json({message:"Invalid Token"})
    }
}