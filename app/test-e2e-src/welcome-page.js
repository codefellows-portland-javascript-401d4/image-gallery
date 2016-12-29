export default class WelcomePage {
    constructor() {
        const nav = element.all(by.css('nav a'));
        this.aImages = nav.get(1);

        this.uiView = element(by.css('main ui-view'));
    }

    get() {
        return browser.get('/');
    }

    get title() {
        return browser.getTitle();
    }

    get stateComponent() {
        return this.uiView.all(by.css('*')).first().getTagName();
    }

    goToImages() {
        this.aImages.click();
    }
}