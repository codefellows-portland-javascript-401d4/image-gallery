import template from './home-detail.html';

export default {
	template,
	controller,
	controllerAs: 'homeDetail'  
};

controller.$inject = ['$scope'];

function controller($scope) {
	this.loading = true;

	this.checkAnimal = function(){
		console.log('animal choice is ', $scope.animalChoice);
		const patt = /goats?/i;
		var result = patt.test($scope.animalChoice);
		if (result){
			console.log('goats');
			$scope.responseText = 'Good choice!  We have lots of pictures of goats!';
		}
		else {
			console.log('no');
			var arr = $scope.animalChoice.split('');
			var lastLetter = arr.pop();
			console.log(lastLetter);
			if(lastLetter === 's' || lastLetter === 'S'){
				$scope.responseText = 'Sorry, we do not have any pictures of '+$scope.animalChoice+'.';
			}
			else{
				$scope.responseText = 'Sorry, we do not have any pictures of '+$scope.animalChoice+'s.';
			}
		}
	};
}