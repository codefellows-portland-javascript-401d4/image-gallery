routes.$inject = ['$stateProvider', '$urlRouterProvider']; 

export default function routes($stateProvider, $urlRouterProvider) {
    
	$stateProvider.state({
		name: 'home', 
		url: '/', 
		component: 'home' 
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
		name: 'add',
		url: '/add',
		component: 'add'
	});

	$urlRouterProvider.otherwise('/');
}