const express = require("express");
const UserRouter = express.Router();
const { getUser } = require("../controller/UserController");

UserRouter.get("/", getUser);

module.exports = UserRouter;
