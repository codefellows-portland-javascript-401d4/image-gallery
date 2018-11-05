import WelcomePage from './welcome-page';

describe('My image-gallery app', () => {
  const welcome = new WelcomePage();

  it('should have a title', () => {
    welcome.get();
    expect(welcome.title).toEqual('Image Gallery');
  });


  describe('navigating on Welcome page', () => {
    beforeEach(() => {
      welcome.get();
    });

    it('should default to welcome page', () => {
      expect(welcome.url).toBe('/');
      expect(welcome.stateComponent).toEqual('welcome');
    });

    it('should navigate to About page', () => {
      welcome.goToAbout();

      expect(welcome.url).toBe('/about');
      expect(welcome.stateComponent).toEqual('about');
    });

    it('should navigate to Gallery page', () => {
      welcome.goToGallery();

      expect(welcome.url).toBe('/gallery/images');
      expect(welcome.stateComponent).toEqual('gallery');
    });

  });

});

