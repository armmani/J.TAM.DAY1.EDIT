import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // TODO Overview Register
    /*
    0. Validate with yup
    1.Check body
    2.Check Email in DB
    3.Encrypt Password => bcryptjs
    4.Save to DB -> Prisma
    5.Response
  */

    // Step 1 Check Body
    console.log(req.body);
    const { email, name, password } = req.body;

    // Step 2 Check Email in DB
    const user = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    console.log(user);
    if (user) {
      createError(400, "Email already Exist");
    }
    // Step 3 Encrypt Password
    const hashPassword = bcrypt.hashSync(password, 10);
    console.log(hashPassword);

    // Step 4 Save to DB
    const result = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: hashPassword,
      },
    });
    res.json({ message: "This is Register" });
  } catch (error) {
    next(error);
  }
};

export const login = (req, res) => {
  // TODO
  /*
    1. Validate Body
    2. Check Body
    3. Check Email in DB
    4. Check pwd
    5. Create token
    6. Response
  */
 
  res.json({ message: "This is Login" });
};
