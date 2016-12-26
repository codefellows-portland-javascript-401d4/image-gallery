routes.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routes($stateProvider, $urlRouterProvider) {

  $stateProvider.state({
    name: 'welcome', // name of this defined app 'state' ... redirected to here from ui-sref "welcome" link in app.html
    url: '/', // url associated with this 'state'
    component: 'welcome' // redirects to template driven by welcome.js
  });

  $stateProvider.state({
    name: 'welcome.new',  // redirected to here from ui-sref link in welcome.js
    url: 'new',
    template: '<p>Hello my new friend!</p>'
  });

  $stateProvider.state({
    name: 'image-gallery', // name of this defined app 'state' ... redirected to here from ui-sref "image-gallery" link in app.html
    url: '/image-gallery', // url associated with this 'state'
    component: 'imageGallery' // Note: camel-case
  });

  $stateProvider.state({
    name: 'welcome.returning',  // redirected to here from ui-sref link in welcome.js
    url: 'returning',
    template: '<p>Welcome back!</p>'
  });

  $stateProvider.state({
    name: 'spiders', // name of this defined app 'state' ... redirected to here from ui-sref "spiders" link in app.html
    url: '/spiders', // url associated with this 'state'
    component: 'spiders'
  });

  $stateProvider.state({
    name: 'mantids', // name of this defined app 'state' ... redirected to here from ui-sref "mantids" link in app.html
    url: '/mantids', // url associated with this 'state'
    component: 'mantids'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    component: 'about'
  });

  $stateProvider.state({
    name: 'about.main',
    url: '/main',
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
    name: 'next',
    url: '/next',
    component: 'next'
  });

  $stateProvider.state({
    name: 'next.main',
    url: '/main',
    views: {
      header: {
        component: 'nextHeaderSpecial'
      },
      main: {
        component: 'nextMainSpecial'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}
