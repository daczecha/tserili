const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const conversationRoutes = require('./routes/conversationRoutes');
const messageRoutes = require('./routes/messageRoutes');

const authorize = require('./middlewares/authMiddleware');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

const SocketServer = require('./SocketServer');

dotenv.config();

const app = express();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('Connected to MongoDB');
  }
);

//middleware
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/conversation', conversationRoutes);
app.use('/api/message', messageRoutes);

app.get('/check', authorize, (req, res) => {
  res.json(req.user);
});

app.use(notFound);
app.use(errorHandler);

const server = app.listen(8800, () => {
  console.log('Backend server is running!');
});

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  console.log(socket.id, 'connected');
  SocketServer(socket);
});
