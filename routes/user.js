import express from "express";
// Controllers
import {
  createUser,
  deleteUser,
  listUser,
  readUser,
  updateRoleUser,
  getMe,
} from "../controllers/user.js";
import { authCheck } from "../middlewares/auth.middleware.js";
// Middleware

const router = express.Router();

// ENDPOINT http://localhost:8000/api/users
router.get("/users", authCheck, listUser);
router.patch("/user/role/:id", authCheck, updateRoleUser);
router.delete("/user/:id", authCheck, deleteUser);

router.get("/getme", authCheck, getMe);

router.get("/user", readUser);
router.post("/user", createUser);

//Export
export default router;
