import template from './home-detail.html';

export default {
	template,
	controller,
	controllerAs: 'homeDetail'  
};

controller.$inject = ['$scope', '$location'];

function controller($scope) {
	this.loading = true;

	this.checkAnimal = function(){
		const patt = /goats?/i;
		var result = patt.test($scope.animalChoice);
		if (result){
			$scope.responseText = 'Good choice!  We have lots of pictures of goats!';
			$scope.picturesButton = true;
		}
		else {
			var arr = $scope.animalChoice.split('');
			var lastLetter = arr.pop();
			if(lastLetter === 's' || lastLetter === 'S'){
				$scope.responseText = 'Sorry, we do not have any pictures of '+$scope.animalChoice+'.';
			}
			else{
				$scope.responseText = 'Sorry, we do not have any pictures of '+$scope.animalChoice+'s.';
			}
			$scope.picturesButton = false;
		}
	};

	this.goToImages = function($location){
		console.log('button clicked.  path is ', $location.path);
		$location.path('images'); 
	};

}