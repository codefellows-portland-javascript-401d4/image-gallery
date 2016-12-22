 const WelcomePage = require('./welcome-page');

 describe('image gallery', function() {
   const welcome = new WelcomePage();

   it('should have a title', function(){
     welcome.get();
     expect(welcome.title).toEqual('Image Gallery');
   });

   describe('navigation', function() {
     beforeEach(function () {
       welcome.get();
     });

     it('default to welcome page, and navigate to gallery', function(){
       expect(welcome.url).toBe('/');
       expect(welcome.stateComponent).toEqual('welcome');

       welcome.goToGallery();

       expect(welcome.url).toBe('/about');
       expect(welcome.stateComponent).toEqual('about');
     });
   });
 });