import express from "express";
// Controllers
import { login, register } from "../controllers/auth.js";
// Validate with yup
import { object, ref, string } from "yup";

const registerSchema = object({
  email: string().email("Incorrect Email").required("Enter your Email"),
  name: string().min(2, "Name must be at least 2 letters"),
  password: string().min(6, "Password must be at least 6 letters"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password is not Matched"
  ),
});

const validate = (schema) => async (req, res, next) => {
  // code body
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    console.log(error)
    next(error);
  }
};

const router = express.Router();

// ENDPOINT http://localhost:8000/auth/register
router.post("/register", validate(registerSchema), register);
router.post("/login", login);

//Export
export default router;
