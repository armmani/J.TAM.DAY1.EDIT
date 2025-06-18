import express from "express";
// Controllers
import { login, register } from "../controllers/auth.js";
import { validate } from "../validations/validator.js";


const router = express.Router();

// ENDPOINT http://localhost:8000/auth/register
router.post("/register", validate(registerSchema), register);
router.post("/login", login);

//Export
export default router;
