const express = require("express");
const admin = require("../Controller/admin.js");
const router = express.Router();

router.post("/login", admin.login)

module.exports = router;