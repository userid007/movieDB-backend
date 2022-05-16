const { MovieList } = require('../../models');

exports.updatePlaylist = async function (req, res) {
  const movielist = await MovieList.findOneAndUpdate(
    { _id: req.body.movieListId },
    { $addToSet: { moviesId: req.body.movieId } }, { new: true }
  )
  return res.status(201).send({
    success: true,
    data: movielist,
    message: 'Movie List Updated'
  });
};
