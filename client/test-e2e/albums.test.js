'use strict';

var _albumsPage = require('./albums-page');

var _albumsPage2 = _interopRequireDefault(_albumsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('My Image App', function () {

    var albums = new _albumsPage2.default();

    it('should have a title', function () {
        albums.get();
        expect(albums.title).toEqual('Image Gallery');
    });

    describe('navigation', function () {

        beforeEach(function () {
            albums.get();
        });

        it('defaults to albums page', function () {

            expect(albums.url).toBe('/albums');
            expect(albums.stateComponent).toEqual('albums');
        });

        it('navigates to the about page', function () {

            albums.goToAbout();

            expect(albums.url).toBe('/about');
            expect(albums.stateComponent).toEqual('about');
        });
    });
});