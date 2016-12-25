

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
    url: '/albums/:id',
    params: {
      display: {
        dynamic: true
      }
    },
    resolve: {
      id: ['$transition$', t => t.params().id],
      images: ['galleryService', '$stateParams', function(g, $s) {
        return g.getAlbum($s.id);
      }],
      remove: ['galleryService', g => { return g; }]
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
    component: 'imageGallery'
  });

  $stateProvider.state({
    name: 'album.thumbnail',
    url: '?display',
    params: {
      display: {
        dynamic: true
      }
    },
    component: 'imageThumb'
  });

  $stateProvider.state({
    name: 'album.detail',
    url: '?display',
    params: {
      display: {
        dynamic: true
      }
    },
    component: 'imageDetail'
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
    abstract: true,
    component: 'addImage',
    resolve: {
      albums: ['galleryService', albums => albums.getAlbums()]
    }
  });

  $urlRouterProvider.otherwise('/');

}