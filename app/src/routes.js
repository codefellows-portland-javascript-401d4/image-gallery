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
        component: 'albumApp'
    });

    $stateProvider.state({
        name: 'albums.options',
        url: '/:name?view',
        params: {
            view: { dynamic: true }
        },
        resolve: {
            name: ['$transition$', t => t.params().name],
            view: ['$transition$', t => t.params().view || 'detail']
        },
        component: 'albumOptions'
    });

    $stateProvider.state({
        name: 'images',
        url: '/images',
        component: 'imageApp'
    });

    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about'
    });

    $stateProvider.state({
        name: 'about.me',
        url: '/me',
        views: {
            header: {
                component: 'aboutHeader'
            },
            main: {
                component: 'aboutMain'
            }
        }
    });

    $stateProvider.state({
        name: 'about.gallery',
        url: '/gallery',
        views: {
            header: {
                component: 'aboutHeaderGallery'
            },
            main: {
                component: 'aboutMainGallery'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
};