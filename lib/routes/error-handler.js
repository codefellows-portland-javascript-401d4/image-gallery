
function errorHandler(err, req, res, next) {
  const code = err.code || 500;
  const message = (err.code === 500) ? 'Internal Server Error' : err.error;
  console.error('Error: ', message);
  res.status(code);
  res.send({error: message});
}

export default errorHandler;