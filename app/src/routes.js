routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'images',
    url: '/images',
    component: 'albums'
  });

  $stateProvider.state({
    name: 'album',
    url: '/images/:id',
    resolve: {
      album: ['albumService', '$transition$', (albums, t) => {
        return albums.get(t.params().id);
      }],
      images: ['album', album => album.images]
    },
    component: 'gallery'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });


  $urlRouterProvider.otherwise('/');

}