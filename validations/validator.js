// Validate with yup
import { object, ref, string } from "yup";

export const registerSchema = object({
  email: string().email("Incorrect Email").required("Enter your Email"),
  name: string().min(2, "Name must be at least 2 letters"),
  password: string().min(6, "Password must be at least 6 letters"),
  confirmPassword: string().oneOf(
    [ref("password"), null],
    "Password is not Matched"
  ),
});

export const loginSchema = object({
  email: string().email("Incorrect Email").required("Enter your Email"),
  password: string().min(6, "Password must be at least 6 letters"),
});

export const validate = (schema) => async (req, res, next) => {
  // code body
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errMsg = error.errors.map((item) => item);
    const errTxt = errMsg.join(",");
    console.log(errTxt);
    const mergeErr = new Error(errTxt);
    next(mergeErr);
  }
};
