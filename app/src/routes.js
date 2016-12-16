routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'welcome',
        url: '/',
        component: 'welcome'
    });

    $stateProvider.state({
        name: 'albums',
        url: '/albums',
        component: 'albums'
    });

    $stateProvider.state({
        name: 'albums.detail',
        url: '/:id/?view',
        params: {
            view: {dynamic: true}
        },
        resolve: {
            id: ['$transition$', t => t.params().id],
            view: ['$transition$', t => t.params().view || 'detail']
        },
        component: 'albumDetail'
    });

    $stateProvider.state({
        name: 'images.detail',
        url: '/:id/?view',
        params: {
            view: {dynamic: true}
        },
        resolve: {
            id: ['$transition$', t => t.params().id],
            view: ['$transition$', t => t.params().view || 'detail']
        },
        component: 'imageDetail'
    });

    $stateProvider.state({
        name: 'images',
        url: '/images',
        component: 'images',
    });

    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about'
    });

    $urlRouterProvider.otherwise('/');
}