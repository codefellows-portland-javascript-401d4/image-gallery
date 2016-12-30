routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome' 
  });

  $stateProvider.state({
    name: 'albums',
    url: '/albums',
    component: 'albums' 
  });

  $stateProvider.state({
    name: 'albums.detail',
        // the url, plus implied params id and view
    url: '/:id',
    params: {
            // "view" same key as above
      view: { dynamic: true }
    },
    resolve: {
      id: ['$transition$', t => t.params().id],
            // "view" is name of component binding, 
            // t.params().view is dependent on key above
      view: ['$transition$', t => t.params().view || 'detail']
            // album: ['$transition$', 'albumService', (t, albums) => {
            //     return albums.get(t.params().id);
            // }]
    },
    component: 'albumDetail'
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
    name: 'about.short',
    url: '/short',
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
    name: 'about.long',
    url: '/long',
    views: {
      header: {
        component: 'aboutHeaderLong'
      },
      main: {
        component: 'aboutMainLong'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}