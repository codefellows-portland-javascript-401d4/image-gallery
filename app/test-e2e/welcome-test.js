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

  describe('navigating on Welcome page', function () {
    beforeEach(function () {
      welcome.get();
    });

    it('should default to welcome page', function () {
      expect(welcome.url).toBe('/');
      expect(welcome.stateComponent).toEqual('welcome');
    });

    it('should navigate to About page', function () {
      welcome.goToAbout();

      expect(welcome.url).toBe('/about');
      expect(welcome.stateComponent).toEqual('about');
    });

    it('should navigate to Gallery page', function () {
      welcome.goToGallery();

      expect(welcome.url).toBe('/gallery/images');
      expect(welcome.stateComponent).toEqual('gallery');
    });
  });
});