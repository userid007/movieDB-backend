const Router = require('express').Router;
const { checkAuth } = require('../../middlewares');

const { createPlaylist } = require('./createPlaylist.controller')
const { getPrivatePlaylists } = require('./getPrivatePlaylists.controller')
const { updatePlaylist } = require('./updatePlaylist.controller')
const { getPublicPlaylists } = require('./getPublicPlaylists.controller')
const { getPrivatePlaylist } = require('./getPrivatePlaylist.controller')
const {
  createPlaylistValidator,
  updatePlaylistValidator
} = require('../../validators');

const router = Router();


router.route('/private')
  .get(checkAuth, getPrivatePlaylists);

router.route('/create')
  .post(checkAuth, createPlaylistValidator, createPlaylist);

router.route('/update')
  .put(checkAuth, updatePlaylistValidator, updatePlaylist)

router.route('/public')
  .get(getPublicPlaylists)

router.route('/privatelist/:movieListId')
  .get(checkAuth, getPrivatePlaylist);


module.exports = router;
