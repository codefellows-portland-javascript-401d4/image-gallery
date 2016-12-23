export default class WelcomePage {
  constructor() {
    const btns = element.all(by.css('div button'));
    this.aGallery = btns.get(0);
    this.aAbout = btns.get(1);

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

  goToAbout() {
    this.aAbout.click();
  }

  goToGallery() {
    this.aGallery.click();
  }


}