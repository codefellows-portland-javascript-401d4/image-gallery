'use strict';

var _welcomePage = require('./welcome-page');

var _welcomePage2 = _interopRequireDefault(_welcomePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('My App', function () {

    var welcome = new _welcomePage2.default();

    it('should have a title', function () {
        welcome.get();
        expect(welcome.title).toEqual('Image Widget');
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