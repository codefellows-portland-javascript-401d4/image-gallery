import HomePage from './home-page';

describe('My image gallery app', function() {

  const home = new HomePage();

  it('App should have a title', function() {
    home.get();
    expect(home.title).toEqual('Image Gallery');
  });

  describe('App navigation', function() {

    beforeEach(function(){
      home.get();
    });

    it('Defaults to home page', function() {

      expect(home.url).toBe('/');
      expect(home.stateComponent).toEqual('welcome');

    });

    it('Navigates to /albums', function() {

      const nav = element.all(by.css('nav a'));
      expect(nav.get(2).getText()).toBe('Albums');

      nav.get(2).click();

      expect(home.url).toBe('/albums');
      expect(home.stateComponent).toEqual('albums');

    });

    it('Navigates to /about/domestic', function() {

      const nav = element.all(by.css('nav a'));
      nav.get(3).click();

      expect(home.url).toBe('/about');
      const aboutLinks = element.all(by.css('.about a'));

      aboutLinks.get(0).click();

      expect(home.url).toBe('/about/domestic');

    });


  });

});