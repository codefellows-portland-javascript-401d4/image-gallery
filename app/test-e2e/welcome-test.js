'use strict';

var _welcomePage = require('./welcome-page');

var _welcomePage2 = _interopRequireDefault(_welcomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('My image-gallery app', function () {
  var welcome = new _welcomePage2.default();

  it('should have a title', function () {
    welcome.get();
    expect(welcome.title).toEqual('Image Gallery');
  });
});