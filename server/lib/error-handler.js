
module.exports = function errorHandler(err, req, res, next) { //eslint-disable-line no-unused-vars

  const code = err.code || 500;
  const message = code === 500 ? 'Internal Server Error' : err.message;
  res.status(code).send({message});
};