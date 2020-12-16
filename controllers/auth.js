const User = require("../models/User");
const CustomError = require("../helpers/error/CustomError");
const asyncErrorWrapper = require("express-async-handler");

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

  res.status(200).json({
    register: true,
    data: user,
  });
});

const errorTest = (req, res, next) => {
  return next(new CustomError("bir hata var costum errror"));
};

module.exports = { register, errorTest };
