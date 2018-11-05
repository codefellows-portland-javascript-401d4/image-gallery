'use strict';

var _homePage = require('./home-page');

var _homePage2 = _interopRequireDefault(_homePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('My image gallery app', function () {

  var home = new _homePage2.default();

  it('App should have a title', function () {
    home.get();
    expect(home.title).toEqual('Image Gallery');
  });

  describe('App navigation', function () {

    beforeEach(function () {
      home.get();
    });

    it('Defaults to home page', function () {

      expect(home.url).toBe('/');
      expect(home.stateComponent).toEqual('welcome');
    });

    it('Navigates to /albums', function () {

      var nav = element.all(by.css('nav a'));
      expect(nav.get(2).getText()).toBe('Albums');

      nav.get(2).click();

      expect(home.url).toBe('/albums');
      expect(home.stateComponent).toEqual('albums');
    });

    it('Navigates to /about/domestic', function () {

      var nav = element.all(by.css('nav a'));
      nav.get(3).click();

      expect(home.url).toBe('/about');
      var aboutLinks = element.all(by.css('.about a'));

      aboutLinks.get(0).click();

      expect(home.url).toBe('/about/domestic');
    });
  });
});