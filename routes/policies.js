const router = require("express").Router();
const policies = require("../controllers/policies.js");
const authUtil  = require("../utils/middleware.js");

module.exports = app => {
  router.post("/policies", authUtil.authenticate, policies.submitPolicy);
}