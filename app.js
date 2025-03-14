const express = require("express");
const authRoute = require("./router/authRoute.js");
const PORT = process.env.port || 3000;
const app = express();

app.use(express.json()); // Middleware for JSON parsing

app.use("/api/v1/auth", authRoute); // Correct base path

app.use("*", (req, res) => {
  res.send({
    message: "This route is Not Found",
    status: 400,
  });
});

app.get("/", (req, res) => {
  res.end("hello node how are you?");
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
