const Router = require('express').Router;
const { playlist } = require('./playlist.controller')
const router = Router();

router.route('/playlist/:movieListId')
  .get(playlist);

module.exports = router;
