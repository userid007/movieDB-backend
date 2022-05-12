const Joi = require('joi');

const schema = Joi.object({
  username: Joi.string().alphanum().trim().min(3).max(30).required(),
  password: Joi.string(),
});

exports.loginValidator = (req, res, next) => {
  const result = schema.validate(req.body);
  if (!result.error) {
    next();
  } else {
    return res.status(400).send({
      success: false,
      data: null,
      message: result.error.details[0].message
    });
  }
};
