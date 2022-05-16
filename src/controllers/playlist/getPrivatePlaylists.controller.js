const { MovieList } = require('../../models');

exports.getPrivatePlaylists = async function (req, res) {
  const movielists = await MovieList.find({ userid: req.user._id });
  return res.status(200).send({
    success: true,
    data: movielists
  });
};
