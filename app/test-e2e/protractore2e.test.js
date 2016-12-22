'use strict';

describe('image gallery navigation', function () {

    beforeEach(function () {
        browser.get('/');
    });

    it('defaults to welcome route', function () {
        var uiView = element(by.css('ui-view'));

        function testState(url, componentName) {
            expect(browser.getLocationAbsUrl()).toBe(url);
            var component = uiView.all(by.css('*')).first();
            expect(component.getTagName()).toEqual(componentName);
        }

        testState('/', 'welcome');

        var nav = element.all(by.css('header a'));

        var aGallery = nav.get(1);

        aGallery.click();

        testState('/imagess', 'images');
    });
});