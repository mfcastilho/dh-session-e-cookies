const { check } = require("express-validator");

const validations = [
  check("name").notEmpty().withMessage("O campo nome não pode estar vazio"),
  check("color").notEmpty().withMessage("O campo cor não pode estar vazio"),
  check("email").notEmpty().withMessage("O campo email não pode estar vazio"),
  check("age").notEmpty().withMessage("O campo idade não pode estar vazio").bail()
    .isNumeric().withMessage("O campo idade só aceita números")
];

module.exports = validations;