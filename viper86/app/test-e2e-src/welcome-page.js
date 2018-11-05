import WelcomePage from './welcome-page';

describe('Welcome page', () => {
  const welcome = new WelcomePage();

  it('Should have a title', () => {
    welcome.get();
    expect(welcome.title).toEqual('Component Gallery');
  });

  describe('Navigation', () => {

    beforeEach(() => {
      welcome.get();
    });

    it('Defaults to welcome page + navigates to albums', () => {
      expect(welcome.url).toBe('/');
      expect(welcome.stateComponent).toEqual('welcome');
      welcome.goToImages();
      expect(welcome.url).toBe('/images');
      expect(welcome.stateComponent).toEqual('albums');
    });
  });


});