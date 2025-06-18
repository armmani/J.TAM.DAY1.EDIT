export const listUser = (req, res, next) => {
  try {
    // 1.Check Email
    if (false) {
      throw new Error("Email already exist")
    } else {
      throw new Error("Password is INVALID")
    }
    res.json({ message: "This is List All User" });
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

export const updateRoleUser = (req, res) => {
  res.json({ message: "This is Update User's Role" });
};

export const deleteUser = (req, res) => {
  res.json({ message: "This is DELETE User" });
};
