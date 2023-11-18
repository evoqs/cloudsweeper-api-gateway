const router = require("express").Router();
const users = require("../controllers/users.js");
const authUtil  = require("../utils/middleware.js");

module.exports = app => {
  // router.get("/", users.getUsers);
  router.post("/register", users.registerUser);
  router.get("/profile", authUtil.authenticate, users.userProfile);
  app.use("/api/users", router);
}