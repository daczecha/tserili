const {
  accessConversation,
  getConversations,
  deleteConversation,
} = require('../controllers/conversationControllers');

const router = require('express').Router();
const authorize = require('../middlewares/authMiddleware');

router.post('/', authorize, accessConversation);
router.get('/', authorize, getConversations);
router.delete('/:conversationId', authorize, deleteConversation);

module.exports = router;
