const Router = require('express').Router;
const { checkAuth } = require('../../middlewares');
const { playlist } = require('./playlist.controller')
const router = Router();

router.route('/playlist/:movieListId')
  .get(checkAuth, playlist);

module.exports = router;
