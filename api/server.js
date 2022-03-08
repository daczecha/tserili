const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');

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

app.use('/auth', authRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(8800, () => {
  console.log('Backend server is running!');
});
