const dotenv = require('dotenv');
dotenv.config();

const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const User = require('../models/User');
const Conversation = require('../models/Conversation');
const Message = require('../models/Message');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS,
  },
});

const registerUser = expressAsyncHandler(async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password,
  });

  const user = await newUser.save();

  const token = generateToken(user._id);

  const url = `http://localhost:8800/api/auth/confirmation/${token}`;

  transporter.sendMail({
    from: process.env.NODEMAILER_USER,
    to: user.email,
    subject: 'Verify Email Access for Tserili',
    html: `Please click this email to confirm your email: <a href="${url}">${url}</a>`,
  });

  res.send(user);
});

const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    res.status(401).send({
      email: "Account with that email doesn't exist",
      password: '',
      confirmation: '',
    });
  }

  if (user && (await user.verifyPassword(password))) {
    if (!user.confirmed) {
      return res.status(401).send({
        email: '',
        password: '',
        confirmation: 'Please confirm your account',
      });
    }

    return res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      token: generateToken(user._id),
    });
  } else {
    return res.status(401).send({
      email: '',
      password: 'Password is incorrect',
      confirmation: '',
    });
  }
});

const emailConfirmation = expressAsyncHandler(async (req, res) => {
  const token = req.params.token;
  const { id } = jwt.verify(token, process.env.JWT_SECRET);

  const hasConfirmed = await User.findOne({
    _id: id,
    confirmed: true,
  });

  if (hasConfirmed)
    return res.redirect('http://localhost:3000/heZio6J2uPFuCTZvpfEH');

  if (id !== process.env.TSERILI_ID) {
    //Add Tserili Conversation
    const createdConvo = await Conversation.create({
      users: [process.env.TSERILI_ID, id],
    });

    await User.findByIdAndUpdate(id, {
      $push: { contacts: process.env.TSERILI_ID },
    });

    //Send message to user

    const welcomeText = 'Hello this is Tserili';

    var messageData = {
      sender: process.env.TSERILI_ID,
      content: welcomeText,
      conversation: createdConvo._id,
    };

    let message = await Message.create(messageData);

    message = await message.populate('sender', 'username avatar');
    message = await message.populate('conversation');

    await Conversation.findByIdAndUpdate(createdConvo._id, {
      latestMessage: message,
    });
  }

  // confirm and send response
  await User.findByIdAndUpdate(id, { confirmed: true });
  res.redirect('http://localhost:3000/60EOGThYDupS2FEwd8NB');
});

module.exports = { loginUser, registerUser, emailConfirmation };
