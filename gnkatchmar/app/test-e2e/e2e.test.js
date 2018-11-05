describe('Welcome Page', function() {

  it('should have the correct title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Angular Image Gallery');
  });
    
  describe('navigation', function() {

    it('defaults to /, navigates to Albums, to About, to About/Long', function() {
            
      const uiView = element(by.css('main ui-view'));

      function testState(url, componentName) {
        expect(browser.getLocationAbsUrl()).toBe(url);

				// Unwieldy way to get first child element
        const component = uiView.all(by.css('*')).first();
        expect(component.getTagName()).toEqual(componentName);                
      }

      testState('/', 'welcome');
            
      const nav = element.all(by.css('header a'));
      const aGallery = nav.get(1);
      const aAbout = nav.get(2);
            
      aGallery.click();

      testState('/albums', 'albums');

      const hdg = element(by.css('h2'));
    	expect(hdg.getText()).toEqual('Image Albums');

      aAbout.click();

      testState('/about', 'about');

      const navAbout = element.all(by.css('main a'));
      const aAboutLong = navAbout.get(1);

      aAboutLong.click();

      testState('/about/long', 'about');

    });
  });
});

