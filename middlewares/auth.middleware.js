import { createError } from "../utils/createError.js";
import jwt from "jsonwebtoken";

export const authCheck = (req, res, next) => {
  // code body
  try {
    // TODO Overview
    /*
      1. Check header
      2. Split Token Bearer
      3. Verify JWT
      4. Create req.user
    */
    // 1 Check header
    const header = req.headers.authorization;
    // console.log(header)
    if (!header) {
      createError(401, "Token Unauthorization");
    }

    // 2 Split Token Bearer
    const token = header.split(" ")[1];
    // console.log(token);

    // 3 Verify JWT
    jwt.verify(token, process.env.SECRET, (error, decode) => {
      // console.log(error);
      // console.log(decode);
      if (error) {
        createError(401, "Token is INVALID");
      }

      req.user = decode;
      next();
    });
  } catch (error) {
    next(error);
  }
};
