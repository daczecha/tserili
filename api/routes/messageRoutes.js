const {
  sendMessage,
  getMessages,
  clearHistory,
} = require('../controllers/messageControllers');

const router = require('express').Router();
const authorize = require('../middlewares/authMiddleware');

router.post('/', authorize, sendMessage);
router.get('/:conversation', authorize, getMessages);
router.delete('/:conversation', authorize, clearHistory);

module.exports = router;
