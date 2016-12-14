/* globals angular, chai */

const { assert } = chai;

describe( 'new-image component', () => {
    angular.mock.module.sharedInjector();
    before(angular.mock.module('components'));

    let newImage = null;

    let addedImage = null;

    const inject = angular.mock.inject(function ($componentController) {
        newImage = $componentController(
            //name of component
            'newImage',
            //locals: dependencies to inject (key: value)
            null,
            //bindings: (key: value)
            { add(p) { addedImage = p; } }
        );
    });

    before(inject);

    function isItEmpty() {
        assert.equal(newImage.title, '');
        assert.equal(newImage.url, '');
        assert.equal(newImage.description, '');
    }

    it('starts with empty entry fields', isItEmpty);

    it('calls the add function with entered data', () => {
        const title = 'test bunny';
        const url = 'www.theroute.com';
        const description = 'This is a picture of a bunny';
        newImage.title = title;
        newImage.url = url;
        newImage.description = description;
        newImage.addNew();
        assert.deepEqual(addedImage, { title, url, description});
    });

    it('empties the entry fields after adding image', isItEmpty);

});
