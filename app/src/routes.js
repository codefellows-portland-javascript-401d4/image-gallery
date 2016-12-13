routes.$inject = ['$stateProvider', '$urlRouterPRovider'];

export default function routes($stateProvider) {

  $stateProvider.state({
    name: 'welcome',
    url: '/',
    component: 'welcome'
  });

  $stateProvider.state({
    name: 'welcome.new',
    url: 'new',
    template: '</p>Greetings! This is an image gallery where you can view images in different formats.</p>'
  });

  $stateProvider.state({
    name: 'welcome.old',
    url: 'old',
    template: '<p>Welcome back.</p>'
  });
}