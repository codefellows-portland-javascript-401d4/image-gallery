routes.inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'images',
    url: '/images',
    component: 'images'
  });

  // $stateProvider.state({
  //   name:'images.add',
  //   url: '/add',
  //   component: 'new-image'
  // });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.bio',
    url: '/bio',
    views: {
      bio: {
        component: 'bio'
      }
    }
  });

  $stateProvider.state({
    name: 'about.lab',
    url: '/app',
    views: {
      lab: {
        component: 'lab'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}
