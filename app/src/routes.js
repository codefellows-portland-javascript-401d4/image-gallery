
routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'welcome',
        url: '/',
        component: 'welcome'
    });

    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about'
    });

    $stateProvider.state({
        name: 'albums',
        url: '/albums',
        component: 'albumsMain'
    });

    $stateProvider.state({
        name: 'album',
        url: '/albums/:id',
        component: 'imageChoice',
        resolve: {
            albumId: ['$transition$', t => t.params().id]
        }
    });

    // $stateProvider.state({
    //     name: 'images',
    //     url: '/images',
    //     component: 'imageChoice'
    // });

    $urlRouterProvider.otherwise('/');
};

