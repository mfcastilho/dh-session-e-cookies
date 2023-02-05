const express = require("express");
const router = express.Router();

const RegisterUserController = require("../controllers/RegisterUserController");

const validations = require("../middlewares/validationsUserRegisterMiddleware");


router.get("/register", RegisterUserController.showRegisterUserPage);

router.post("/register", validations, RegisterUserController.processingRegisterUser);

router.get("/color", RegisterUserController.showColorFormPage);

module.exports = router;