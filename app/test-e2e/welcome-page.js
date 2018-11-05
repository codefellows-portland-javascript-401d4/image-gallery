
export default class WelcomePage {
    constructor() {
        // get a reference to the navigation elements
        const nav = element.all(by.css('nav a'));
        this.aAlbums = nav.get(2);
        this.aImages = nav.get(3);

        // get a ref to the main <ui-view>
        // TODO: not happy with this verbose, inefficient way
        // to get first child element. find a better way
        this.uiView = element(by.css('main ui-view'));
    }

    get() {
        // navigate to url (in this case baseUrl in protractor.conf.js)
        return browser.get('/');
    }

    get title() {
        return browser.getTitle();
    }

    get url() {
        return browser.getLocationAbsUrl();
    }

    get stateComponent() {
        // get the current tagName of first element
        // under <ui-view> (which should be the state component)
        return this.uiView.all(by.css('*')).first().getTagName();
    }

    goToAlbums() {
        this.aAlbums.click();
    }

    goToImages() {
        this.aImages.click();
    }}

