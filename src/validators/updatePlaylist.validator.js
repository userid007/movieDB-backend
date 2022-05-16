const Joi = require('joi');

const schema = Joi.object({
  movieListId: Joi.string().required(),
  movieId: Joi.string().required()
});

exports.updatePlaylistValidator = (req, res, next) => {
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
