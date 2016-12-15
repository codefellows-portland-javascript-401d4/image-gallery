routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
  $stateProvider.state({
    name: 'welcome', // name of this defined app "state"
    url: '/', // url associated with the state,
    component: 'welcome' 
  });

  $stateProvider.state({
    name: 'gallery',
    url: '/gallery',
    component: 'app' 
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


