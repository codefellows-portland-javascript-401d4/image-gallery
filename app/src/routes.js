

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
    name: 'album',
    url: '/albums/:id?display',
    params: {
      display: {
        dynamic: true
      }
    },
    resolve: {
      id: ['$transition$', t => t.params().id],
      display: ['$transition$', t => t.params().display || 'gallery']
    },
    component: 'album'
  });

  $stateProvider.state({
    name: 'album.gallery',
    url: '?display',
    params: {
      display: {
        dynamic: true
      }
    },
    resolve: {
      display: 'gallery'
    },
    component: 'image-gallery'
  });

  $stateProvider.state({
    name: 'album.thumbnail',
    url: '?display',
    params: {
      display: {
        dynamic: true
      }
    },
    resolve: {
      display: 'thumb'
    },
    component: 'image-thumb'
  });

  $stateProvider.state({
    name: 'album.detail',
    url: '?display',
    params: {
      display: {
        dynamic: true
      }
    },
    resolve: {
      display: 'detail'
    },
    component: 'image-detail'
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