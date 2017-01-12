// Protractor testing ...

'use strict';

describe('Image Gallery e2e Test', () => {

  // index.html home page has a title
  it('has page title', () => {
    browser.get('/');  // eslint-disable-line
    expect(browser.getTitle()).toEqual('Image Gallery');  // eslint-disable-line
  });

  describe('image gallery ui-sref link navigates to albums view state / url', () => {

    // 'albums' view state navigates over to url /albums
    it('navigates to albums url', () => {
      browser.get('/');  // eslint-disable-line
      expect(browser.url).toBe('/');  // eslint-disable-line
      expect(browser.stateComponent).toEqual('welcome');  // eslint-disable-line
      browser.goToGallery();  // eslint-disable-line
      expect(browser.url).toBe('/albums');  // eslint-disable-line
      expect(browser.stateComponent).toEqual('albums');  // eslint-disable-line
    });
  });
});
