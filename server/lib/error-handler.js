module.exports = function errorHandler(err, req, res, next) {
  let code = 500,
    error = 'Internal Service Error';

    if(err.name === 'ValidationError' || err.name === 'CastError') {
      console.log(err.errors);
      code = 400;
      error = err.name.message;
    }
    else if(err.code) {
      code = err.code;
      error = err.error;
      console.log(err.code, err.error);
    }
    else {
      console.log(err);
    }
    
    res.status(code).send({ error });
};
