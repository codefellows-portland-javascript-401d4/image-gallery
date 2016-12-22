describe('image gallery navigation', function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('defaults to welcome route', function() {
        const uiView = element(by.css('ui-view'));

        function testState(url, componentName) {
            expect(browser.getLocationAbsUrl()).toBe(url);
            const component = uiView.all(by.css('*')).first();
            expect(component.getTagName()).toEqual(componentName);
        }
    
        testState('/', 'welcome');

        const nav = element.all(by.css('header a'));

        const aGallery = nav.get(1);

        aGallery.click();

        testState('/images', 'images');
        });
});