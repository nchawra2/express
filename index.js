const express = require("express");

const UserRoute = require("./router/UserRouter");
const app = express();

app.use("/api/v1/users", UserRoute);

app.listen(5000, () => {
  console.log("server is running");
});