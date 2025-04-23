const joi = require("joi");

const signUpValidation = (req, res, next) => {
  const validatorSchema = new joi.object({
    name: joi.string().min(3).max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().min(3).max(10).required(),
    conf_password: joi.string().min(3).max(10).required(),
  });
  const { error } = validatorSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const validatorSchema = new joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(3).max(10).required(),
  });
  const { error } = validatorSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: "Bad request", error });
  }
  next();
};

module.exports = {
    signUpValidation,
    loginValidation,
}
