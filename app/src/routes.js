routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'welcome',
        url: '/',
        component: 'welcome'
    });

    $stateProvider.state({
        name: 'image-app',
        url: '/images',
        component: 'imageApp'
    });

    $stateProvider.state({
        name: 'about',
        url: '/about',
        component: 'about'
    });

    $stateProvider.state({
        name: 'about.english',
        url: '/eng',
        views: {
            header: {
                component: 'aboutEnglishHead'
            },
            main: {
                component: 'aboutEnglishMain'
            }
        }
    });

    $stateProvider.state({
        name: 'about.chinese',
        url: '/chi',
        views: {
            header: {
                component: 'aboutChineseHead'
            },
            main: {
                component: 'aboutChineseMain'
            }
        }
    });

    $urlRouterProvider.otherwise('/');
}