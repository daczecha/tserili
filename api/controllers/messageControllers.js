const expressAsyncHandler = require('express-async-handler');

const Message = require('../models/Message');
const Conversation = require('../models/Conversation');

const sendMessage = expressAsyncHandler(async (req, res) => {
  const { content, conversation } = req.body;

  if (!content || !conversation) {
    console.log('Bad request');
    return res.sendStatus(400);
  }

  var messageData = {
    sender: req.user.id,
    content,
    conversation,
  };

  try {
    let message = await Message.create(messageData);

    message = await message.populate('sender', 'username avatar');
    message = await message.populate('conversation');

    await Conversation.findByIdAndUpdate(conversation, {
      latestMessage: message,
    });

    res.status(201).json(message);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
const getMessages = expressAsyncHandler(async (req, res) => {
  const { conversation } = req.params;
  try {
    const messages = await Message.find({ conversation })
      .populate('sender', 'username avatar')
      .populate('conversation');

    res.status(200).send(messages);
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

module.exports = { getMessages, sendMessage };
