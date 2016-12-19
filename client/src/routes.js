routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'albums',
        url: '/albums',
        component: 'albums'
    });

    $stateProvider.state({
        name: 'albums.contents',
        // the url, plus implied params id and view
        url: '/:id?view',
        params: {
            // "view" same key as above
            view: { dynamic: true }
        },
        resolve: {
            id: ['$transition$', t => t.params().id],
            // "view" is name of component binding, 
            // t.params().view is dependent on key above
            view: ['$transition$', t => t.params().view || 'gallery']
        },
        component: 'albumContents'
    });

    $stateProvider.state({
        name: 'images',
        url: '/images',
        component: 'images'
    });

    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about'
    });

    $stateProvider.state({
        name: 'about.project',
        url: '/project',
        component: 'project'
    });

    $stateProvider.state({
        name: 'about.developer',
        url: '/developer',
        component: 'developer'
    });

    $urlRouterProvider.otherwise('/albums');
}
