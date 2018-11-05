const WelcomePage = require('./welcome-page');

describe('image gallery app', function() {
  const welcome = new WelcomePage();

  it('should have a title', function() {
    welcome.get();
    expect(welcome.title).toEqual('image gallery');
  });

  beforeEach(function () {
    welcome.get();
  });

  it('should load the welcome component', function() {
    expect(welcome.url).toBe('/');
    expect(welcome.stateComponent).toEqual('welcome');
  });

  it('should navigate to the gallery', function() {
    welcome.goToGallery();
    expect(welcome.url).toBe('/images');
    expect(welcome.stateComponent).toEqual('image-app');
  });
});