// ERROR: [$injector:unpr] Unknown provider: addNewDirectiveProvider <- addNewDirective


// const { assert } = chai;

// describe( 'component', () => {

//   angular.mock.module.sharedInjector();
//   const mockModule = angular.mock.module('components');
//   before(mockModule);
    
//   let newImage = null;
//   let add = image => add.image = image;

//   const injectComponent = angular.mock.inject($componentController => {
//     newImage = $componentController('addNew', null, { add });
//   });
//   before(injectComponent);

//   function testEmpty() {
//     assert.equal(newImage.title, '');
//     assert.equal(newImage.url, '');
//     assert.equal(newImage.desc, '');
//   }

//   it('defaults to empty strings on prop', testEmpty);

//   it('calls the add function with property data', () => {
//     const title = 'Bugs';
//     const url = 'www.melblanc.com';
//     const desc = 'Rascally Rabbit!';
//     newImage.title = title;
//     newImage.url = url;
//     newImage.desc = desc;
//     newImage.addNew();
//     assert.deepEqual(add.image, { title, url, desc });
//   });

//   it('resets the properties after add', testEmpty);

// });