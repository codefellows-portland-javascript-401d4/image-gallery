routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcomePage'
  });

  $stateProvider
    .state({
      name: 'about',
      url: '/about',
      component: 'about'
    })
    .state({
      name: 'aboutDev',
      url: '/about/dev',
      component: 'aboutDev'
    });

  $stateProvider.state({
    name: 'images',
    url: '/images',
    component: 'images'
  });

  $urlRouterProvider.otherwise('/');
}