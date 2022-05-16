const { registerValidator } = require('./register.validator');
const { loginValidator } = require('./login.validator');
const { createPlaylistValidator } = require('./createPlaylist.validator')
const { updatePlaylistValidator } = require('./updatePlaylist.validator')

module.exports = {
  registerValidator,
  loginValidator,
  createPlaylistValidator,
  updatePlaylistValidator,
};
