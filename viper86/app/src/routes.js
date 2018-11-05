routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcomePage'
  });

  $stateProvider
    .state({
      name: 'about',
      url: '/about',
      component: 'about'
    })
    .state({
      name: 'aboutDev',
      url: '/about/dev',
      component: 'aboutDev'
    });

  $stateProvider.state({
    name: 'albums',
    url: '/albums',
    component: 'albums'
  });

  $stateProvider.state({
    name: 'images',
    url: '/albums/:id',
    resolve: {
      album: ['albumService', '$transition$', (albums, t) => {
        console.log('params', albums.get(t.params().id));
        return albums.get(t.params().id);
      }],
      images: ['album', album => album.images]
    },
    component: 'images'
  });

  $urlRouterProvider.otherwise('/');
}