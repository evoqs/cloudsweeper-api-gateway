const router = require("express").Router();
const gateway = require("../controllers/gateway.js");
const authUtil  = require("../utils/middleware.js");

module.exports = app => {
  router.get("/dummy-json", gateway.dummyJson)
  router.get("/*", authUtil.authenticate, gateway.getTunnel);
  router.post("/*", authUtil.authenticate, gateway.postTunnel);
  router.put("/*", authUtil.authenticate, gateway.putTunnel);
  router.delete("/*", authUtil.authenticate, gateway.deleteTunnel);
  app.use("/api/gw", router);
}