import { createError } from "../utils/createError.js";
import prisma from "../config/prisma.js";

export const listUser = async (req, res, next) => {
  try {
    const user = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });
    console.log(user);

    res.json({
      message: "This is List All User",
      result: user,
    });
  } catch (error) {
    next(error);
  }
};
export const updateRoleUser = async (req, res, next) => {
  try {
    // 1. Read params & body
    const { id } = req.params;
    const { role } = req.body;
    console.log(id, role);
    // 2. Update to DB
    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        role: role,
      },
    });

    res.json({ message: `UPDATED Role ${user.name} to ${user.role}` });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });
    res.json({ message: "User Deleted" });
  } catch (error) {
    next(error);
  }
};


export const readUser = (req, res) => {
  res.json({ message: "This is Read User" });
};

export const createUser = (req, res) => {
  res.json({ message: "This is Create User" });
};
