const router = require("express").Router();
const auth = require("../controllers/auth.js");

module.exports = app => {
  router.post("/login", auth.login);
  app.use("/api/auth", router);
}