routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'landing',
    url: '/',
    component: ''
  });

  $stateProvider.state({
    name: '',
    url: '/',
    component: ''
  });

  $stateProvider.state({
    name: '',
    url: '/',
    component: ''
  });

  $stateProvider.state({
    name: '',
    url: '/',
    component: ''
  });

  $urlRouterProvider.otherwise('/');
}
