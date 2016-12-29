routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'gallery',
    url: '/gallery',
    resolve: {
      images: ['imageService', imageService => imageService.getAll()],
      albums: ['albumService', albumService => albumService.getAll()]
    },
    component: 'gallery'
  });

  $stateProvider.state({
    name: 'gallery.images',
    url: '/images',
    component: 'images'
  });
  
  $stateProvider.state({
    name: 'gallery.albums',
    url: '/albums',
    abstract: true,
    default: '.album-collection',
    component: 'albums'
  });

  $stateProvider.state({
    name:'gallery.albums.album-collection',
    url: '/album-collection',
    component: 'albumCollection'
  });

  $stateProvider.state({
    name:'gallery.albums.album',
    url: '/albums/:id',
    resolve: {
      paramId: ['$transition$', t => t.params().id],
      album: ['albums', 'paramId', (albums, id) => {
        return albums.find(alb => alb._id === id);
      }],
      albumImages: ['images', 'paramId', (images, id) => {
        return images.filter(el => el.albumId._id === id);
      }]
    },
    component: 'album'
  });

  // $stateProvider.state({
  //   name: 'album.list',
  //   url: '/list',
  //   component: 'listView'
  // });

  // $stateProvider.state({
  //   name: 'album.thumb',
  //   url: '/thumb',
  //   component: 'thumbView'
  // });

  $urlRouterProvider.otherwise('/');
}