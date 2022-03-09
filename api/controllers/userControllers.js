const expressAsyncHandler = require('express-async-handler');

const User = require('../models/User');

const getUser = expressAsyncHandler(async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { username: { $regex: req.query.search, $options: 'i' } },
          { email: { $regex: req.query.search, $options: 'i' } },
        ],
      }
    : {};

  const users = await User.find(keyword)
    .find({ _id: { $ne: req.user._id } })
    .select('-password -confirmed');
  res.status(200).send(users);
});

module.exports = { getUser };
