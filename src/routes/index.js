const Router = require('express').Router;
const authControllers = require('../controllers/auth');
const userControllers = require('../controllers/user');
const router = Router();

router.use('/auth', authControllers);
router.use('/user', userControllers);

module.exports = router;
