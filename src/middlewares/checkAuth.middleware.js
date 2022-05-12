const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.checkAuth = async (req, res, next) => {
  const token = req.get('authorization').split(' ')[1];
  jwt.verify(token, process.env.TOKEN_SECRET, {}, async (error, decoded) => {
    if (error) {
      return res.status(401).send({
        success: false,
        data: 'token is invalid'
      });
    }
    const user = await User.findOne({ _id: decoded.sub });
    req.user = user;
    next();
  });

};
