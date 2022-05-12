const { User } = require('../../models');

exports.getProfile = async function (req, res) {
  const user = await User.findOne({ _id: req.user._id }, {
    password: 0,
  });
  return res.status(200).send({
    success: true,
    data: user,
    message: 'user data'
  });
};
