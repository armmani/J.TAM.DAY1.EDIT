import prisma from "../config/prisma.js";
import { createError } from "../utils/createError.js";

export const register = async (req, res, next) => {
  try {
    // TODO Overview Register
    /*
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
      where:{
        email:email
      }
    })
    console.log(user)
    if(user) {
      createError(400, "Email already Exist")
    }
    // Step 3 Encrypt Password

    res.json({ message: "This is Register" });
  } catch (error) {
    next(error);
  }
};

export const login = (req, res) => {
  res.json({ message: "This is Login" });
};
