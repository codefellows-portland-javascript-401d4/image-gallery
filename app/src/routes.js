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
    template: '</p>Hello new user</p>'
  });

  $stateProvider.state({
    name: 'welcome.returning',
    url: 'returning',
    template: '<p>Welcome back!</p>'
  });

  $stateProvider.state({
    name: 'images',
    url: '/images',
    component: 'images'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.domestic',
    url: '/domestic',
    views: {
      header: {
        component: 'aboutHeader'
      },
      main: {
        component: 'aboutMain'
      }
    }
  });

  $stateProvider.state({
    name: 'about.wild',
    url: '/wild',
    views: {
      header: {
        component: 'aboutHeaderWild'
      },
      main: {
        component: 'aboutMainWild'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}