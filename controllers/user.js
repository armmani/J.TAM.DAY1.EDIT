export const listUser = (req, res) => {
  //code body
  res.json({ message: "This is List All User" });
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
