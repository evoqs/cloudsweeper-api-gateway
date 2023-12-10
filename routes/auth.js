const router = require("express").Router();
const auth = require("../controllers/auth.js");

module.exports = app => {
  router.post("/login", auth.login);
  router.post("/register", auth.register);
  app.use("/api/auth", router);
}