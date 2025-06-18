export const authCheck = (req, res, next) => {
  // code body
  if (true) {
    console.log("This is Middleware");
    next();
  }
};
