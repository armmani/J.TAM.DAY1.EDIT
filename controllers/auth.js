export const register = (req, res) => {
  // TODO Overview Register
  /*
    1.Check body
    2.Check Email in DB
    3.Ecrypt Password => bcryptjs
    4.Save to DB -> Prisma
    5.Response
  */

  // Step 1 Check Body
  console.log(req.body);

  res.json({ message: "This is Register" });
};

export const login = (req, res) => {
  res.json({ message: "This is Login" });
};
