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
    template: '</p>Greetings! This is an image gallery where you can view images in different formats. Click on the \'See Images\' link above to access the gallery.</p>'
  });

  $stateProvider.state({
    name: 'welcome.old',
    url: 'old',
    template: '<p>Welcome back. You know what to do.</p>'
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
    name: 'about.english',
    url: '/eng',
    views: {
      header: {
        component: 'aboutHeadEng'
      },
      body: {
        component: 'aboutBodyEng'
      }
    }
  });

  $stateProvider.state({
    name: 'about.russian',
    url: '/rus',
    views: {
      header: {
        component: 'aboutHeadRus'
      },
      body: {
        component: 'aboutBodyRus'
      }
    }
  });

  $urlRouterProvider.otherwise('/');
}