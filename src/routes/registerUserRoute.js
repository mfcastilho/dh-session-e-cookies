const express = require("express");
const router = express.Router();

const RegisterUserController = require("../controllers/RegisterUserController");


router.get("/admin/register", RegisterUserController.showRegisterUserPage);

router.post("/admin/register", RegisterUserController.processingRegisterUser)

module.exports = router;