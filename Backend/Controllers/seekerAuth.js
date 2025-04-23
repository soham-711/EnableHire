const userModel = require("../Models/seekerUser");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const seekerSignup = async (req,res)=>{
   try {
    const {name,email,password,conf_password} = req.body;
    const isUser = await userModel.findOne({email});
    if(isUser){
        return res.status(409).json({message:"User Already exist",success:true})
    }
    if(password!==conf_password){
       return res.status(403).json({message:"Please enter correct confirm password",success:false})
    }
    const hashPass = await bcrypt.hash(password,10);
    const hashConfPass = await bcrypt.hash(conf_password,10);
    const user = new userModel({
        name,
        email:email,
        password:hashPass,
        conf_password:hashConfPass,
    })
    await user.save();
    console.log(user);
    
    res.status(201).json({message:"Signup Successfully",success:true});
   } catch (error) {
    console.log(error);
    
    res.status(500).json({message:"Signup Failed",success:false});
   }
   

}

const seekerLogin = async (req,res)=>{
  try {
    const {email,password} = req.body;
    const isUser = await userModel.findOne({email});
    if(!isUser){
        res.status(403).json({message:"Email or password is wrong",success:false});
    }
    const isPassMatch = await bcrypt.compare(password,isUser.password);
    if(!isPassMatch){
        res.status(403).json({message:"Email or password is wrong",success:false});
    }

    const jwtToken = jwt.sign(
        {email:email,_id:isUser._id},
        process.env.JWT_SECRET,
        {expiresIn:'24h'}
    )
    res.status(200).json({message:"Login Successfully",jwtToken,email:email,name:isUser.name,success:true})

  } catch (error) {
    res.status(500).json({message:"Login Failed",success:false});
  }
}

module.exports = {
    seekerSignup,
    seekerLogin
}