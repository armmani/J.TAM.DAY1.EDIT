import express from "express";
import prisma from "../config/prisma.js";

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

// ทำ landmark เพิ่ม
router.post("/landmark", async (req, res) => {
  try {
    const { title, lat, lng } = req.body;
    console.log(req.body);

    const landmark = await prisma.landmark.create({
      data: {
        title: title,
        lat: Number(lat),
        lng: Number(lng),
      },
    });
    console.log(landmark);
    res.json({ message: "Create Landmark Success" });
  } catch (error) {
    console.log(error)
  }
});

router.get("/landmarks", async(req,res, next) => {
  try {
    const landmarks = await prisma.landmark.findMany({})
    res.json({ result: landmarks})
  } catch (error) {
    next(error)
  }
})

//Export
export default router;
