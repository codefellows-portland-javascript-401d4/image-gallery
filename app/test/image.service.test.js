describe( 'pirate service', () => {
    const { assert } = chai;


    // we need to mock the services module, that's were
    // pirate service lives
    beforeEach( 
        angular.mock.module('services', { apiUrl: '/api' })
    );