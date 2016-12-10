
function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
  const code = err.code || 500;
  const message = (err.code === 500) ? 'Internal Server Error' : err.error;
  console.error('Error: ', message);
  res.status(code);
  res.send({error: message});
}

module.exports = errorHandler;