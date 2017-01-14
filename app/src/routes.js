routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state({
      name: 'home',
      url: '/',
      component: 'home'
    })
    .state({
      name:'about',
      url: '/about',
      component: 'about'
    })
    .state({
      name: 'albums',
      url: '/albums',
      component: 'albums'
    })
    .state({
      name: 'albums.add',
      url: '/add',
      component: 'addAlbum'
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
    });
  $urlRouterProvider.otherwise('/');
}