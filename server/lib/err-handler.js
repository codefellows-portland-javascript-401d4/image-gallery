module.exports = function errHandler(err, req, res, next) { //eslint-disable-line
  let code = 500, error = 'Sorry. Our server is unable to complete your request';

  if(err.name === 'ValidationError' || err.name === 'CastError') {
    console.log(err.errors);
    code = 400;
    error = err.errors.name.message;
  }else if (err.code) {
    code = err.code;
    error = err.error;
    console.log(err.code, err.error);
  }else{
    console.log('unexpectedly, this error has been thrown:', err);
  }

  res.status(code).send({error});
};