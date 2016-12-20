

routes.$inject = ['$stateProvider', '$urlRouterProvider'];


export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'landing',
    url: '/',
    component: 'landing'
  });

  $stateProvider.state({
    name: 'albums',
    url: '/albums',
    component: 'albums',
    resolve: {
      albums: ['galleryService', g => {
        return g.getAlbums();
      }]
    }
  });

  $stateProvider.state({
    name: 'albums.album',
    url: '/:id?display',
    params: {
      display: {
        dynamic: true
      }
    },
    resolve: {
      id: ['$transition$', t => t.params().id],
      display: ['$transition$', t => t.params().display || 'thumb']
    },
    component: 'album'
  });

  $stateProvider.state({
    name: 'about',
    abstract: true,
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.app',
    url: '/app',
    component: 'aboutApp'
  });

  $stateProvider.state({
    name: 'about.dev',
    url: '/dev',
    component: 'aboutDev'
  });

  $stateProvider.state({
    name: 'add',
    url: '/add',
    component: 'addImage',
    resolve: {
      albums: ['galleryService', albums => albums.getAlbums()]
    }
  });

  $urlRouterProvider.otherwise('/');

}