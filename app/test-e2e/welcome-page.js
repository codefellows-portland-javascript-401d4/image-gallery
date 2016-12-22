class WelcomePage {
  constructor() {
    const button = element.all(by.css('main a'));
    this.galleryButton = button.get(0);
    this.uiView = element(by.css('main ui-view'));
  }

  get() {
    return browser.get('/');
  }

  get title() {
    return browser.getTitle();
  }

  get url() {
    return browser.getLocationAbsUrl();
  }

  get stateComponent() {
    return this.uiView.all(by.css('*')).first().getTagName();
  }

  goToGallery() {
    this.galleryButton.click();
  }
}

module.exports = WelcomePage;