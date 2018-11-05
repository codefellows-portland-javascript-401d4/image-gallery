routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'imageApp',
    url: '/images',
    component: 'imageApp'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'imageApp.add',
    url: '/addImage',
    component: 'addImage'
  });

  $stateProvider.state({
    name: 'albums',
    url: '/albums',
    component: 'albumView'
  });

  $stateProvider.state({
    name: 'albums.thumbnail',
    url: '/:id',
    params: {
      view: {dynamic: true}
    },
    resolve: {
      id: ['$transition$', t => t.params().id]
    },
    component: 'albumThumbnail'
  });

  $urlRouterProvider.otherwise('/');
}