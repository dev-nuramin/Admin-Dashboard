import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const tokenVerify = (req, res, next) => {
  const authHeader = req.headers.authorization;
  console.log(authHeader);

  if (!authHeader) {
    return res.status(400).json({ message: "Unauthorized" });
  }

  // split token

  const token = authHeader.split(" ")[1];

  // now token verify
  jwt.verify(
    token,
    process.env.ACCESS_TOKEN_SECRET,
    asyncHandler(async (err, decode) => {
      if (err) {
        return res.status(400).json({ message: "Invalid Token" });
      }

      const me = await User.findOne({ email: decode.email }).select(
        "-password"
      );

      req.me = me;

      next();
    })
  );
  // const accessToken = req.cookies.accessToken;

  // if (!accessToken) {
  //   return res.status(400).json({ message: "Unauthorized" });
  // }

  // jwt.verify(
  //   accessToken,
  //   process.env.ACCESS_TOKEN_SECRET,
  //   asyncHandler(async (err, decode) => {
  //     if (err) {
  //       return res.status(400).json({ message: "Invalid Token" });
  //     }

  //     const me = await User.findOne({ email: decode.email }).select(
  //       "-password"
  //     );

  //     req.me = me;

  //     next();
  //   })
  // );
};

export default tokenVerify;
