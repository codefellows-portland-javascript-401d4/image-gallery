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

  // $stateProvider.state({
  //   name: 'gallery.images.list',
  //   url: '/list',
  //   component: 'image-list'
  // });

  // $stateProvider.state({
  //   name: 'gallery.images.thumb',
  //   url: '/thumb',
  //   component: 'images-thumb'
  // });

  // $stateProvider.state({
  //   name: 'gallery.images.full',
  //   url: '/full',
  //   component: 'images-list'
  // });
  
  $stateProvider.state({
    name: 'gallery.albums',
    url: '/albums',
    component: 'albums'
  });

  // $stateProvider.state({
  //   name: 'list.names',
  //   url: '/names',
  //   component: 'list-view-names'
  //   // views: {
  //   //   urls: {
  //   //     component: 'listViewUrls'
  //   //   },
  //   //   names: {
  //   //     component: 'listViewNames'
  //   //   }
  //   // }
  // });
  // $stateProvider.state({
  //   name: 'list.urls',
  //   url: '/urls',
  //   views: {
  //     urls: {
  //       component: 'listViewUrls'
  //     },
  //     names: {
  //       component: 'listViewNames'
  //     }
  //   }
  // });

  $urlRouterProvider.otherwise('/');
}