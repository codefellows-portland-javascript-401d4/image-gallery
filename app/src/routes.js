routes.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function routers($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'images',
    url: '/images',
    
  })
}