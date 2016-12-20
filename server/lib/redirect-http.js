module.exports = function getRedirectHttp() {
  return function redirectHttp(req, res, next) {
    // (if express directly https, we could check req.secure,
    // but on heroku, we are behind proxy and our server is never https)
    // on heroku, they will set this header to communicate
    // what incoming protocol was used.

    // if https, call next
    if(req.headers['x-forwarded-proto'] === 'https') next();
    // otherwise redirect to same url, but wih https instead of http
    else res.redirect(`https://${req.hostname}${req.url}`);
  };
};
