describe('Welcome Page', function() {

  it('should have the correct title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Angular Image Gallery');
  });
    
  describe('navigation', function() {

    it('default to /', function() {
            
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

      aAbout.click();

      testState('/about', 'about');

    });
  });
});