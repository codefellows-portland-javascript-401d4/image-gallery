import WelcomePage from './welcomePage';

describe('Picture Viewer', function () {
  const welcome = new WelcomePage();

  it('should have a title', function() {
    welcome.get();
    expect(welcome.title).toEqual('Picture Viewer');
  });

  describe('navigation', function() {

    beforeEach(function() {
      welcome.get();
    });

    it('defaults to welcome page and then navigates about page', function() {
      expect(welcome.url).toBe('/');
      expect(welcome.stateComponent).toEqual('welcome');

      welcome.goToAbout();

      expect(welcome.url).toBe('/about');
      expect(welcome.stateComponent).toEqual('about');
    });

  });
});