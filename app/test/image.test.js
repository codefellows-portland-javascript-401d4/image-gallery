// describe( 'images component', () => {
//   const { assert } = chai;

//   angular.mock.module.sharedInjector();

//   before(angular.mock.module('compnents'));

//   beforeEach( 
//         angular.mock.module('components')
//     );
    
//   let $component = null;
//   before(angular.mock.inject($componentController => {
//     $component = $componentController;
//   }));

//   describe('create component', () => {

//     const images = [
//             { title: 'test rabbit 1', url: 'captain', desc: '' },
//             { title: 'luffy', url: 'captain', desc: '' }
//     ];

//     const image = { name: 'zoro', rank: 'swordsman' };
        
//     const imageService = {
//       get() {
//         return Promise.resolve(images);
//       },
//       add(image) {
//         return Promise.resolve(image);
//       },
// 			// remove(imageId)
// 			//         return Promise.resolve(image);
//     };

//     const component = $component('images', { imageService });

//     it( 'loads images', done => {

//       assert.isOk(component.loading);

//       setTimeout(() => {
//         assert.equal(component.images, images);
//         assert.isNotOk(component.loading);
//         done();
//       });
//     });


//     it( 'add a images', done => {

//       component.add(image);

//       setTimeout(() => {
//         assert.equal(images.length, 3);
//         assert.equal(images[2], image);
//         done();
//       });
//     });

// 		//  it( 'removes image', done => {

//     //   component.remove(image);

//     //   setTimeout(() => {
//     //     assert.equal(images.length, 2);
//     //     assert.equal(images[2], image);
//     //     done();
//     //   });
//     // });

//   });

// });