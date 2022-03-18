const expressAsyncHandler = require('express-async-handler');

const Message = require('../models/Message');
const User = require('../models/User');
const Conversation = require('../models/Conversation');

const accessConversation = expressAsyncHandler(async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    console.log('UserId param not sent with request');
    return res.sendStatus(400);
  }

  const convo = await Conversation.findOne({
    isGroup: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user.id } } },
      { users: { $elemMatch: { $eq: userId } } },
    ],
  })
    .populate('users', '-password')
    .populate('latestMessage', '-conversation');

  if (convo) return res.status(200).json(convo);

  var chatData = {
    users: [req.user._id, userId],
  };

  try {
    const createdConvo = await Conversation.create(chatData);

    const newConvo = await Conversation.findOne({
      _id: createdConvo._id,
    }).populate('users', '-password');

    await User.findByIdAndUpdate(req.user.id, {
      $push: { contacts: userId },
    });

    await User.findByIdAndUpdate(userId, {
      $push: { contacts: req.user.id },
    });

    res.status(200).json(newConvo);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

const getConversations = expressAsyncHandler(async (req, res) => {
  let convos = await Conversation.find({
    users: { $elemMatch: { $eq: req.user.id } },
  })
    .populate('users', '-password')
    .sort({ updatedAt: -1 });

  convos = await Message.populate(convos, 'latestMessage');
  convos = await User.populate(convos, {
    path: 'latestMessage.sender',
    select: 'username avatar email',
  });
  res.send(convos);
});

module.exports = { accessConversation, getConversations };
