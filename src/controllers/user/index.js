const Router = require('express').Router;
const { getProfile } = require('./profile.controller');
const { checkAuth } = require('../../middlewares');
const router = Router();

router.route('/profile')
  .get(checkAuth, getProfile);

module.exports = router;
