const Joi = require('joi');
const pattern = '^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[!@#$%^&*()\-__+.]){1,}).{8,}$';

const schema = Joi.object({
  username: Joi.string().alphanum().trim().min(4).max(30).required(),
  password: Joi.string().min(8).pattern(new RegExp(pattern)).required().messages({
    'string.pattern.base': 'Password is not strong'
  }),
});

exports.registerValidator = (req, res, next) => {
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
