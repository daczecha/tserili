const {
  registerUser,
  loginUser,
  emailConfirmation,
} = require('../controllers/authControllers');

const router = require('express').Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/confirmation/:token', emailConfirmation);

module.exports = router;
