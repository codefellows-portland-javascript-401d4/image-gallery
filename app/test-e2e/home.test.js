'use strict';

var _homePage = require('./home-page');

var _homePage2 = _interopRequireDefault(_homePage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('My goat app homepage', function() {

	    var home = new _homePage2.default();

	it('should have a title', function() {
		home.get();
		expect(home.title).toEqual('Goat Image Gallery');
	});
    
	describe('navigation', function() {
		beforeEach(function() {
			home.get();
		});

		it('default to home page, and navigate to gallery', function() {
            
			expect(home.url).toBe('/');
			expect(home.stateComponent).toEqual('home');  

			home.goToGallery();

			expect(home.url).toBe('/images');
			expect(home.stateComponent).toEqual('images');  

		});
		it('navigates to the about page', function() {
            
			home.goToAbout();

			expect(home.url).toBe('/about');
			expect(home.stateComponent).toEqual('about');  

		});

	});
});