const signup = (req, res, next) => {
  res.json({
    status: "success",
    message: "Signup Successfully!",
  });
};

module.exports = { signup };
