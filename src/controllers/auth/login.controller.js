const { User } = require('../../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.login = async function (req, res) {
  const user = await User.findOne({ username: req.body.username });
  if (user && await bcrypt.compare(req.body.password, user.password)) {
    const token = jwt.sign({ username: user.username }, process.env.TOKEN_SECRET, { subject: user.id, expiresIn: '90d' });
    return res.status(201).send({
      success: true,
      data: { accessToken: token },
      message: 'successful authentication'
    });
  }
  return res.status(400).send({
    success: false,
    data: null,
    message: 'username or password is incorrect'
  });
};
