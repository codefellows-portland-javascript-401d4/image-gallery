routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'albums',
      url: '/albums',
      component: 'albums'
    })

    .state({
      name: 'albums',
      url: '/albums',
      component: 'albums'
    })

    .state({
      name: 'albums.add',
      url: '/newalbum',
      component: 'newAlbum'
    })

    .state({
      name: 'albums.images',
      url: '/:id',
      component: 'images',
      resolve: {
        album: ['albumService', '$transition$', (albums, t) => {
          return albums.getId(t.params().id);
        }],
        images: ['album', album => album.images]
      }
    })

    .state ({
      name: 'images',
      url: '/images',
      component: images
    })

    .state ({
      name: 'about',
      url: '/about',
      component: 'about'
    });

  $urlRouterProvider.otherwise('/albums');
}
