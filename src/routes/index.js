const Router = require('express').Router;
const authControllers = require('../controllers/auth');
const userControllers = require('../controllers/user');
const playlistControllers = require('../controllers/playlist')
const publicControlllers = require('../controllers/public')

const router = Router();

router.use('/auth', authControllers);
router.use('/user', userControllers);
router.use('/playlist', playlistControllers)
router.use('/public', publicControlllers)

module.exports = router;
