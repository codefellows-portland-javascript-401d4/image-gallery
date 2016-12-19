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

  $stateProvider.state({
    name:'albums',
    url: '/albums',
    component: 'albums'
  });

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

  $stateProvider.state({
    name: 'albums.detail',
    // the url, plus implied params id and view
    url: '/:id?name',
    params: {
      // "view" same key as above
      view: { dynamic: true }
    },
    resolve: {
      id: ['$transition$', t => t.params().id],
      // "view" is name of component binding,
      // t.params().view is dependent on key above
      view: ['$transition$', t => t.params().view || 'detail']
      // crew: ['$transition$', 'crewService', (t, crews) => {
      //     return crews.get(t.params().id);
      // }]
    },
    component: 'albumDetail'
  });

  $urlRouterProvider.otherwise('/');
}
