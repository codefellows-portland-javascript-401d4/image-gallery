routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/',
    component: 'home'
  })
  .state({
    name: 'images',
    url: '/images',
    component: 'imageChoice'
  })
  .state({
    name: 'images.add',
    url: '/add',
    views: {
      main:{
        component: 'imageAdd'
      }
    }
  })
  .state({
    name: 'images.delete',
    url: '/delete',
    views: {
      main:{
        component: 'imageDelete'
      }
    }
  })
  .state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $urlRouterProvider.otherwise('/');

}