'use strict';

var _welcomePage = require('./welcomePage');

var _welcomePage2 = _interopRequireDefault(_welcomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Picture Viewer', function () {
  var welcome = new _welcomePage2.default();

  it('should have a title', function () {
    welcome.get();
    expect(welcome.title).toEqual('Picture Viewer');
  });

  describe('navigation', function () {

    beforeEach(function () {
      welcome.get();
    });

    it('defaults to welcome page and then navigates about page', function () {
      expect(welcome.url).toBe('/');
      expect(welcome.stateComponent).toEqual('welcome');

      welcome.goToAbout();

      expect(welcome.url).toBe('/about');
      expect(welcome.stateComponent).toEqual('about');
    });
  });
});