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

    $urlRouterProvider.otherwise('/');
}
