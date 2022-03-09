const notFound = (req, res, next) => {
  const error = new Error('Not Found - ', req.originalUrl);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  let errors = { email: '', username: '', password: '', confirmation: '' };

  if (err.message.includes('User validation failed')) {
    if (err.errors.email) errors.email = 'Please provide valid email';

    if (err.errors.username) {
      switch (err.errors.username.kind) {
        case 'minlength':
          errors.username = 'Username must be minimum 3 characters long';
          break;
        case 'maxlength':
          errors.username = 'Username must be maximum 20 characters long';
          break;
        default:
      }
    }
  } else if (err.code === 11000) {
    errors.email = 'User with that email is already registered';
  } else {
    errors = err;
  }

  res.json(errors);
};

module.exports = { notFound, errorHandler };
