import User from "../models/User.js";
import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import cookie from 'cookie-parser';
/**
 * @DESC login
 * @Route /api/v1/auth
 * @method POST
 * @access public
 */


export const login = asyncHandler(async (req, res) => {
  const {  email, password} = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // check validation
 const loggingUser = await User.findOne({email});
 //if not found in valid user
 if(!loggingUser){
  return res.status(400).json({ message: "Sorry this email not in our record" });
 }

 //validation password
 const passwordCheck = await bcrypt.compare(password, loggingUser.password);

 // if password do not match
 if(!passwordCheck){
  return res.status(400).json({ message: "wrong password" });
 }

 // create access token
 const tokenUser = jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET, {
  expiresIn: process.env.ACCESS_TOKEN_EXPIRE_IN
 });

 // create refrehtoken
 const refreshToken = jwt.sign({email}, process.env.REFRESH_TOKEN_SECRET, {
  expiresIn: process.env.REFRESH_TOKEN_EXPIRE_IN
 });


 // set cookie
 res.cookie("accessToken", tokenUser)
  res.status(200).json({
    refreshToken,
    loggingUser,
    tokenUser
  })
});