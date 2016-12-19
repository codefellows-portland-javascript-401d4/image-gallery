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
    component: 'gallery'
  });

  $stateProvider.state({
    name: 'gallery.images',
    url: '/images',
    params: {
      images: null
    },
    resolve: {
      images: ['$transition$', t => {
        return t.params().images;
      }]
    },
    component: 'images'
  });

  $stateProvider.state({
    name: 'gallery.albums',
    url: '/albums',
    params: { //defines parameters for data to be passeed
      albums: null
    },
    resolve: { //resolve line provides bindings to the component
      albums: ['$transition$', t => {
        return t.params().albums;
      }]
    },
    component: 'albums'
  });

  $stateProvider.state({
    name: 'gallery.albums.album',
    url: '/:id?view',
    params: {
      view: {dynamic: true}
    },
    resolve: {
      id: ['$transition$', t => t.params().id],
      view: ['$transition$', t => t.params().view || 'thumb']
    },
    component: 'albums'
  });

  $stateProvider.state({
    name: 'gallery.images.list',
    url: '/imagest-list',
    component: 'images-list',
    params: {
      images: null
    },
    resolve: {
      images: ['$transition$', t => {
        return t.params().images;
      }]
    },

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