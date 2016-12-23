routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome', // name of this defined app 'state' ... redirected to here from ui-sref "welcome" link in app.html
    url: '/', // url associated with this 'state'
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'welcome.new',  // redirected to here from ui-sref link in welcome.js
    url: 'new',
    template: '<p>Hello my new friend!</p>'
  });

  $stateProvider.state({
    name: 'welcome.returning',  // redirected to here from ui-sref link in welcome.js
    url: 'returning',
    template: '<p>Welcome back!</p>'
  });

  $stateProvider.state({
    name: 'spiders', // name of this defined app 'state' ... redirected to here from ui-sref "spiders" link in app.html
    url: '/spiders', // url associated with this 'state'
    components: 'spiders'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.now',
    url: '/now',
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
    name: 'about.next',
    url: '/next',
    views: {
      header: {
        component: 'aboutHeaderSpecial'
      },
      main: {
        component: 'aboutMainSpecial'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}
