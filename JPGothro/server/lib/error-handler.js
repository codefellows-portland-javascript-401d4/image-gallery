
module.exports = function errorHandler (err, req, res, next) {

    const code = err.code || 500;
    const message = code === 500 ? 'Internal Server Error' : err.message;
    // console.log(code, message);
    // console.error(err.error || err.message);
    res.status(code).send({message});

};
