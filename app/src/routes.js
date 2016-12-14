routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) { //TODO - do these work as $xxx??
  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'images',
    url: '/images',
    component: 'galleryApp'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $urlRouterProvider.otherwise('/');

}