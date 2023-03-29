const bcrypt= require("bcrypt");
const User =  require("../models/user_Schema")

//User SignUp API.
const usersignup = async(req, res)=>{
console.log('Data:- ', req.body)
const {email, password}=new User(req.body);
const userData = new User(req.body)
 try{

    const isUserExist = await User.findOne({email: email});
    if(isUserExist){

    return res.status(409).json({

    status : false,
    error : "Email alredy exist",

        });
    }
 const salt = await bcrypt.genSalt(10);
 userData.password = await bcrypt.hash(password, salt);
 await userData.save();
 return res.status(201).json({

    success : true,
    message : "Registration Successfully",
 });

 }catch(err){
 res.status(500).json({

    status : false,
    error : err.message
 });

 }

 }

 module.exports={

    usersignup
 } 
