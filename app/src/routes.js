routes.$inject = ['$stateProvider', '$urlRouterProvider'];


export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'landing',
    url: '/',
    component: 'landing'
  });

  $urlRouterProvider.otherwise('/');

}