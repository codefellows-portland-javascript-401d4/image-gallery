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
    name: 'spiders', // name of this defined app 'state' ... redirected to here from ui-sref "spiders" link in image-gallery.html
    url: '/spiders', // url associated with this 'state'
    component: 'spiders'
  });

  $stateProvider.state({
    name: 'mantids', // name of this defined app 'state' ... redirected to here from ui-sref "mantids" link in image-gallery.html
    url: '/mantids', // url associated with this 'state'
    component: 'mantids'
  });

  $stateProvider.state({
    name: 'subjects', // name of this defined app 'state' ... redirected to here from ui-sref "subjects" link in image-gallery.html
    url: '/subjects', // url associated with this 'state'
    component: 'subjects'
  });

  $stateProvider.state({
    name: 'new-album', // name of this defined app 'state' ... redirected to here from ui-sref "new-album" link in image-gallery.html
    url: '/new-album', // url associated with this 'state'
    component: 'newAlbum'
  });

  $stateProvider.state({
    name: 'new-subject', // name of this defined app 'state' ... redirected to here from ui-sref "new-subject" link in image-gallery.html
    url: '/new-subject', // url associated with this 'state'
    component: 'newSubject'
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
