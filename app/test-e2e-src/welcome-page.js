var object = class WelcomePage {
  constructor() {
    const nav = element.all(by.css('nav a'));
    this.gallery = nav.get(1);
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
    this.gallery.click();
  }

};
module.exports = object;