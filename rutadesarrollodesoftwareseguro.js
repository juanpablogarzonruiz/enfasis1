const express = require("express");
const router = express.Router();
const controladorclase = require("./controladorclase.js");
router.post("/",controladorclase.ingresar);
module.exports = router;
