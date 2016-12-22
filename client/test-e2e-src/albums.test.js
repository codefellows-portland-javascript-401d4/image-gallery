import AlbumsPage from './albums-page';

describe('My Image App', function() {

    const albums = new AlbumsPage();

    it('should have a title', function() {
        albums.get();
        expect(albums.title).toEqual('Image Gallery');
    });

    describe('navigation', function() {

        beforeEach(function() {
            albums.get();
        });

        it('defaults to albums page', function() {

            expect(albums.url).toBe('/albums');
            expect(albums.stateComponent).toEqual('albums');

        });

        it('navigates to the about page', function() {

            albums.goToAbout();

            expect(albums.url).toBe('/about');
            expect(albums.stateComponent).toEqual('about');

        });

    });

});
