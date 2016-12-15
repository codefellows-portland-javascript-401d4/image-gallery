routes.$inject = ['$stateProvider', '$urlRouterProvider'];


export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'landing',
    url: '/',
    component: 'landing'
  });

  $stateProvider.state({
    name: 'about',
    abstract: true,
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.app',
    url: '/app',
    component: 'aboutApp'
  });

  $stateProvider.state({
    name: 'about.dev',
    url: '/dev',
    component: 'aboutDev'
  });

  $stateProvider.state({
    name: 'gallery',
    url: '/gallery',
    component: 'image-app'
  });

  $urlRouterProvider.otherwise('/');

}