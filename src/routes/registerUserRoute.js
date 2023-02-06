const express = require("express");
const router = express.Router();

const RegisterUserController = require("../controllers/RegisterUserController");

const validations = require("../middlewares/validationsUserRegisterMiddleware");
const verifyingIfTheSessionIsUseMiddleware = require("../middlewares/verifyingIfTheSessionIsUseMiddleware");


router.get("/register", RegisterUserController.showRegisterUserPage);

router.post("/register", validations, RegisterUserController.processingRegisterUser);

router.get("/color", verifyingIfTheSessionIsUseMiddleware, RegisterUserController.showColorFormPage);


router.post("/delete", RegisterUserController.delete);

module.exports = router;