const { MovieList } = require('../../models');

exports.getPublicPlaylists = async function (req, res) {
  const publiclist = await MovieList.find({ isPrivate: false });
  return res.status(200).send({
    success: true,
    data: publiclist
  });
};
