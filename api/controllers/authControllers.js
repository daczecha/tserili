const expressAsyncHandler = require('express-async-handler');
const generateToken = require('../config/generateToken');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const User = require('../models/User');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tseriliauth@gmail.com',
    pass: 'tseriliauth123',
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

  const url = `http://localhost:8800/auth/confirmation/${token}`;

  console.log(token);
  console.log(url.slice(40));
  console.log('Token match:', token === url.slice(40));

  transporter.sendMail({
    from: 'Tserili Noreply',
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
    res.status(401);
    throw new Error("Account with that email doesn't exist");
  }

  if (user && (await user.verifyPassword(password))) {
    if (!user.confirmed) {
      res.status(401);
      throw new Error('Please confirm your account!');
    }

    return res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      avatar: user.avatar,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Password incorrect!');
  }
});

const emailConfirmation = expressAsyncHandler(async (req, res) => {
  const token = req.params.token;
  const { id } = jwt.verify(token, process.env.JWT_SECRET);
  await User.findByIdAndUpdate(id, { confirmed: true });
  res.redirect('http://localhost:3000/login');
});

module.exports = { loginUser, registerUser, emailConfirmation };