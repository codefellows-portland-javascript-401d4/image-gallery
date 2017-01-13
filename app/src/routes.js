routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'images',
      url: '/images',
      component: 'app'
    })
    .state({
      name:'about',
      url: '/about',
      component: 'about'
    })
    .state({
      name: 'home',
      url: '/',
      component: 'home'
    });
  $urlRouterProvider.otherwise('/');
}