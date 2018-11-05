export default class WelcomePage {
  constructor() {
    const links = element.all(by.css('a'));
    this.aboutPage = links.get(3);
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
    this.aboutPage.click();
  }
}