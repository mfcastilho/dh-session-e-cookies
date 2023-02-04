const express = require("express");
const router = express.Router();

const RegisterUserController = require("../controllers/RegisterUserController");

const validations = require("../middlewares/validationsUserRegisterMiddleware");


router.get("/admin/register", RegisterUserController.showRegisterUserPage);

router.post("/admin/register", validations, RegisterUserController.processingRegisterUser);

module.exports = router;