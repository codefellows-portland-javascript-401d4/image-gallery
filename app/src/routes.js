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
    name: 'images',
    url: '/images',
    component: 'images'
  });

  $stateProvider.state({
    name: 'albums',
    url: '/albums',
    component: 'albums'
  });

  $stateProvider.state({
    name: 'list.all',
    url: '/all',
    component: 'listViewNames'
    // views: {
    //   urls: {
    //     component: 'listViewUrls'
    //   },
    //   names: {
    //     component: 'listViewNames'
    //   }
    // }
  });

  $stateProvider.state({
    name: 'list.names',
    url: '/names',
    component: 'list-view-names'
    // views: {
    //   urls: {
    //     component: 'listViewUrls'
    //   },
    //   names: {
    //     component: 'listViewNames'
    //   }
    // }
  });
  $stateProvider.state({
    name: 'list.urls',
    url: '/urls',
    views: {
      urls: {
        component: 'listViewUrls'
      },
      names: {
        component: 'listViewNames'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}