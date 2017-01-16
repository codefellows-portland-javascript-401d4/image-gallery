routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'albums',
    url: '/albums',
    component: 'albums'
  });

  $stateProvider.state({
    name: 'albums.add',
    url: '/newalbum',
    component: 'newAlbum'
  });

  $stateProvider.state({
    name: 'albums.images',
    url: '/:id?view',
    params: {
      view: { 
        dynamic: false 
      },
    },
    resolve: {
      id: ['$transition$', t => t.params().id],
      view: ['$transition$', t => t.params().view || 'full']
    },
    component: 'album-images'
  });

  $stateProvider.state ({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $urlRouterProvider.otherwise('/albums');
}
