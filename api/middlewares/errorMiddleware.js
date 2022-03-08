const notFound = (req, res, next) => {
  const error = new Error('Not Found - ', req.originalUrl);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  let errors = { email: '', password: '', confirmation: '' };

  console.log(err);

  if (err.code === 11000) {
    errors.email = 'User with that email is already registered';
  } else {
    errors = err;
  }

  res.json(errors);
};

module.exports = { notFound, errorHandler };
