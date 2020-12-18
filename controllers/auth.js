const User = require("../models/User");
const asyncErrorWrapper = require("express-async-handler");
const { sendJwtToClient} = require('../helpers/authorization/tokenHelpers')
const { validateUserInput, comparePassword } = require('../helpers/input/inputHelpers');
const CustomError = require("../helpers/error/CustomError");


const register = asyncErrorWrapper(async (req, res, next) => {
  //todo: bu ksim kullanicidan alincak, suan deneme mamcli yapildi, view asamasinda kaldirilcak
  /**
   * name ,email, password required
   * password 6 digits
   *  method post
   *
   * */


  // Sending users to db
  const { name, email, password} =req.body
  const user = await User.create({
    name,
    email,
    password
  });
sendJwtToClient(user,res)
 
});

const getUser = (req,res,next)=>{
  res.json({
    success:true,
    data:{
      id:req.user.id,
      name:req.user.name

    }

  })
}

const login = asyncErrorWrapper(async(req, res, next) => {
  const { email, password } = req.body;
  if(!validateUserInput(email,password)){
    return next(new CustomError('Please check your inputs',400))
  }
  const user = await User.findOne({ email }).select('+password');
  if(!comparePassword(password,user.password)){
    return next(new CustomError('Please check your credentials',400))
  }
  sendJwtToClient(user,res)


  res
  .status(200)
  .json({
    success:true
  })
})

const logout = asyncErrorWrapper(async(req, res, next) => {

  const { NODE_ENV } = process.env;
  return res
  .status(200)
  .cookie({
   httpOnly:true,
   expires:new Date(Date.now()),
   secure:NODE_ENV === 'development' ? false : true
  }).json({
    success:true,
    message: 'Logout successfull'
  })

});

const imageUpload = asyncErrorWrapper(async(req, res, next) => {
  res
  .status(200)
  .json({
    success:true,
    message:'you uploaded image successfully'
  })
})

module.exports = { register, getUser,login, logout, imageUpload };
