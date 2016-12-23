import WelcomePage from './welcome-page';

describe('My image-gallery app', () => {
  const welcome = new WelcomePage();

  it('should have a title', () => {
    welcome.get();
    expect(welcome.title).toEqual('Image Gallery');
  });
});