routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

    $stateProvider.state({
        name: 'welcome',
        url: '/',
        component: 'welcome'
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
        name: 'about.plain',
        url: '/plain',
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
        name: 'about.cool',
        url: '/cool',
        views: {
            header: {
                component: 'aboutHeaderCool'
            },
            main: {
                component: 'aboutMainCool'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
};