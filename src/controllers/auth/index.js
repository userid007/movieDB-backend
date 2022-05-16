const Router = require('express').Router;
const { login } = require('./login.controller');
const { register } = require('./register.controller');

const {
  registerValidator,
  loginValidator,
} = require('../../validators');

const router = Router();

router.route('/login')
  .post(loginValidator, login);

router.route('/register')
  .post(registerValidator, register);

module.exports = router;
