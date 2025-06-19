const error = (err, req, res, next) => {
  // code body
  res
    .status(err.code || 500)
    .json({ message: err.message || "Something long" });
}

export default error