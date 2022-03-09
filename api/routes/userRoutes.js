const { getUser } = require('../controllers/userControllers');

const router = require('express').Router();
const authorize = require('../middlewares/authMiddleware');

router.get('/', authorize, getUser);

module.exports = router;
