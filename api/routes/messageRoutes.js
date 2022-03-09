const {
  sendMessage,
  getMessages,
} = require('../controllers/messageControllers');

const router = require('express').Router();
const authorize = require('../middlewares/authMiddleware');

router.post('/', authorize, sendMessage);
router.get('/:conversation', authorize, getMessages);

module.exports = router;
