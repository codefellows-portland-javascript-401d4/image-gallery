import WelcomePage from './welcome-page';

describe('My welcome page', function() {
    const welcome = new WelcomePage();

    it('has a title', function() {
        welcome.get();
        expect(welcome.title()).toEqual('Image Gallery');
    });

    beforeEach(function() {
        welcome.get();
    });

    describe('navigation', function() {
        it('lands on welcome and navigates to albums with description substate', function() {
            expect(welcome.url).toBe('/');
            expect(welcome.stateComponent).toEqual('welcome');

            welcome.goToImages();

            expect(welcome.url).toBe('/images/description');
            expect(welcome.stateComponent).toEqual('images'); 
        });
    });       
});