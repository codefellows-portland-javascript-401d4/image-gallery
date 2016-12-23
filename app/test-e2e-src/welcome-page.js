export default class WelcomePage {
  // constructor() {
  //   const nav = element.all(by.css)
  // }


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

  // goToGallery() {
  //   this.aGallery.click();
  // }


}