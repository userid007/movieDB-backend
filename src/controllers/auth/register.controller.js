const { User } = require('../../models');
const bcrypt = require('bcrypt');

exports.register = async function (req, res) {
  const existingUser = await User.findOne({ username: req.body.username });
  if (existingUser) {
    return res.status(401).send({
      success: false,
      data: null,
      message: 'User already exists'
    });
  }
  const user = await User.create({
    ...req.body,
    password: bcrypt.hashSync(req.body.password, 10),
  });

  return res.status(201).send({
    success: true,
    data: { id: user._id },
    message: 'User created'
  });
};
