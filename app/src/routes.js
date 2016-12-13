routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) { //TODO - do these work as $xxx??
  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'gallery',
    url: '/gallery',
    component: 'gallery-app'
  });

  $urlRouterProvider.otherwise('/');

}