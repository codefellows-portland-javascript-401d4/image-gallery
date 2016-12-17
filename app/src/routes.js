routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome',
    url:'/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'albums',
    url:'/albums',
    component: 'albums'
  });

  $stateProvider.state({
    name: 'parentComp',
    url: '/gallery',
    component: 'parentComp'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.staff',
    url: '/staff',
    component: 'aboutStaff'
  });

  $urlRouterProvider.otherwise('/');
}