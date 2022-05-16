const { MovieList } = require('../../models');

exports.createPlaylist = async function (req, res) {
  if (await MovieList.findOne({ userid: req.user._id, name: req.body.name })) {
    return res.status(401).send({
      success: false,
      data: null,
      message: 'Playlist already exists'
    });
  }
  const movielist = await MovieList.create({
    ...req.body,
    userid: req.user._id,
    username: req.user.username
  });

  return res.status(201).send({
    success: true,
    data: { id: movielist._id },
    message: 'Movie List Created'
  });
};
