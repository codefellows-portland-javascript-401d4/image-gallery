'use strict';

var _welcomePage = require('./welcome-page');

var _welcomePage2 = _interopRequireDefault(_welcomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Welcome page', function () {
  var welcome = new _welcomePage2.default();

  it('Should have a title', function () {
    welcome.get();
    expect(welcome.title).toEqual('Component Gallery');
  });

  describe('Navigation', function () {

    beforeEach(function () {
      welcome.get();
    });

    it('Defaults to welcome page + navigates to albums', function () {
      expect(welcome.url).toBe('/');
      expect(welcome.stateComponent).toEqual('welcome');
      welcome.goToImages();
      expect(welcome.url).toBe('/images');
      expect(welcome.stateComponent).toEqual('albums');
    });
  });
});