const {
  acessConversation,
  getConversations,
} = require('../controllers/conversationControllers');

const router = require('express').Router();
const authorize = require('../middlewares/authMiddleware');

router.post('/', authorize, acessConversation);
router.get('/', authorize, getConversations);

module.exports = router;
