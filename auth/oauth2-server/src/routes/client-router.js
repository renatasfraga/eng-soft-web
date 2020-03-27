const express = require("express");
const ClientController = require("../controllers/user-controller");
const validator = require("../routes/schema-validator");
const ClientSchema = require("../routes/client-schema");

const router = express.Router({ mergeParams: true });

router.use(express.urlencoded({ extended: true }));
router.post(
  "/auth/openconnect",
  validator(ClientSchema, "generateToken"),
  ClientController.post
);

module.exports = router;
