routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'welcome.new',
    url: 'new',
    template: '</p>Greetings! This is an image gallery where you can view images in different formats. Click on the \'See Images\' link above to access the gallery.</p>'
  });

  $stateProvider.state({
    name: 'welcome.old',
    url: 'old',
    template: '<p>Welcome back. You know what to do.</p>'
  });

  $stateProvider.state({
    name: 'albums',
    abstract: true,
    default: '.overview',
    url: '/albums',
    resolve: {
      albums: ['albumService', albumService => {
        return albumService.get();
      }]
    },
    component: 'albums'
  });

  $stateProvider.state({
    name: 'albums.overview',
    url: '/overview',
    component: 'albumOverview'
  });

  $stateProvider.state({
    name: 'albums.detail',
    url: '/detail',
    component: 'albumDetail'
  });

  $stateProvider.state({
    name: 'albums.images',
    url: '/:id',
    resolve: {
      album: ['albumService', '$transition$', (albumService, t) => {
        return albumService.get(t.params().id);
      }]
    },
    component: 'images'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.english',
    url: '/eng',
    views: {
      header: {
        component: 'aboutHeadEng'
      },
      body: {
        component: 'aboutBodyEng'
      }
    }
  });

  $stateProvider.state({
    name: 'about.russian',
    url: '/rus',
    views: {
      header: {
        component: 'aboutHeadRus'
      },
      body: {
        component: 'aboutBodyRus'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}