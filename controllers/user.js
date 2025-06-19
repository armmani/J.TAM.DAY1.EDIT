import { createError } from "../utils/createError.js";

export const listUser = async (req, res, next) => {
  try {
    // 1.Check Email

    res.json({ message: "This is List All User" });
  } catch (error) {
    next(error);
  }
};
export const updateRoleUser = async (req, res, next) => {
  try {
    res.json({ message: "This is Update Role User" });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    res.json({ message: "This is DELETE User" });
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
