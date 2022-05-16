const { MovieList } = require('../../models');

exports.getPrivatePlaylist = async function (req, res) {
  const movielist = await MovieList.findOne({ _id: req.params.movieListId });
  if (movielist.isPrivate && movielist.username !== req.user.username) {
    return res.status(403).send({
      success: true,
      data: null,
      message: "Unauthorized"
    });
  }
  return res.status(200).send({
    success: true,
    data: movielist
  });
};
