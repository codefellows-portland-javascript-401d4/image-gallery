routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: '',
    url: '',
    template: '',
    component: ''
  });

  $urlRouterProvider.otherwise('/');
}
