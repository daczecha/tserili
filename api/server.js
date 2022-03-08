const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/authRoutes');

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
app.use(express.json());

app.use('/auth', authRoutes);

app.listen(8800, () => {
  console.log('Backend server is running!');
});
